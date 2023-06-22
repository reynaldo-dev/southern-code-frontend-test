import React, { Suspense, useState } from "react";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Skeleton from "@mui/material/Skeleton";

import { Photo } from "@/interfaces/photo.interface";
import { styles } from "./card.styles";
import { PhotoView } from "../modal/PhotoView";

const LazyImage = React.lazy(
  () =>
    import(
      "@/components/app/lazy-load-image/LazyImage" /* webpackChunkName: "LazyImage" */
    )
);

interface IPhotoCardProps {
  photo: Photo;
}

export const PhotoCard = ({ photo }: IPhotoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {photo ? (
        <Card sx={styles.root}>
          <CardHeader
            style={styles.text}
            avatar={
              <Avatar sx={styles.cardHeaderAvatar} aria-label="card">
                {photo?.rover?.name[0]}
              </Avatar>
            }
            title={`${photo?.camera?.full_name} (${photo?.camera?.name})`}
          />

          <Suspense
            fallback={
              <Skeleton
                animation="wave"
                color="#c4c4c4"
                variant="rectangular"
                width={210}
                height={118}
              />
            }
          >
            <LazyImage url={photo?.img_src} width={345} height={345} />
          </Suspense>

          <CardContent sx={styles.cardContent}>
            <Typography variant="body2" sx={styles.text}>
              <Brightness7Icon sx={{ mr: 1 }} />
              {photo?.sol}
            </Typography>
            <CardActions disableSpacing>
              <Button onClick={handleToggleModal}>
                <OpenInNewIcon />
              </Button>
            </CardActions>
          </CardContent>

          {isOpen && (
            <PhotoView isOpen={isOpen} setIsOpen={setIsOpen} photo={photo} />
          )}
        </Card>
      ) : (
        <Skeleton
          animation="wave"
          color="#c4c4c4"
          variant="rectangular"
          width={210}
          height={118}
        />
      )}
    </>
  );
};
