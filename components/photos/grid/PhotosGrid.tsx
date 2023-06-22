import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import UseAnimations from "react-useanimations";

import arrowUp from "react-useanimations/lib/arrowUp";

import { Box, Grid, Button } from "@mui/material";

import { Photo } from "@/interfaces/photo.interface";
import { PhotoCard } from "../card/PhotoCard";
import { usePhotos } from "@/hooks/usePhotos";
import { PageTitle } from "@/components/app/pageTitle/PageTitle";
import { styles } from "./photosGrid.styles";
import { EndMessage } from "./pagination/end-message/EndMessage";
import { LoaderPage } from "./pagination/loader/LoaderPage";

interface IPhotosGridProps {
  rover: string;
  camera: string;
  sol: number;
  earth_date: string;
}
export const PhotosGrid = ({
  camera,
  earth_date,
  rover,
  sol,
}: IPhotosGridProps) => {
  const [page, setPage] = useState(1);

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setPage(1);
  }, [camera, earth_date, rover, sol]);

  const {
    loading: isLoading,
    photos,
    hasMore,
  } = usePhotos({
    camera,
    earth_date,
    rover,
    sol,
    page,
  });

  return (
    <Box sx={styles.root}>
      <PageTitle title="Photos" />
      <InfiniteScroll
        dataLength={photos?.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<LoaderPage isLoading={isLoading} />}
        endMessage={<EndMessage photos={photos} />}
      >
        <Grid
          container
          spacing={5}
          style={styles.grid}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        >
          {photos?.map((item: Photo) => (
            <Grid key={item?.id} item>
              <PhotoCard photo={item} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
      <Button onClick={handleGoUp} variant="contained" sx={styles.toolTip}>
        <UseAnimations
          animation={arrowUp}
          size={30}
          strokeColor="#fff"
          style={{ textAlign: "center" }}
        />
      </Button>
    </Box>
  );
};
