import React from "react";

import UseAnimations from "react-useanimations";

import arrowUp from "react-useanimations/lib/arrowUp";

import { Box, Grid, Button } from "@mui/material";
import { Photo } from "@/interfaces/photo.interface";
import { styles } from "@/components/photos/grid/photosGrid.styles";
import { PageTitle } from "@/components/app/pageTitle/PageTitle";
import { PhotoCard } from "@/components/photos/card/PhotoCard";
import { handleGoUp } from "@/utils/handleGoUp";
import { LottieAnimation } from "@/components/app/lottie/LottieAnimation";
import NoData from "../../../public/no-data.json";

interface IFavoritesGridProps {
  photos: Photo[];
}

export const FavoritesGrid = ({ photos }: IFavoritesGridProps) => {
  return (
    <Box sx={styles.root}>
      <PageTitle title="Favorites" />
      <Grid
        container
        spacing={5}
        style={styles.grid}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      >
        {photos?.length > 0 ? (
          photos?.map((item: Photo) => (
            <Grid key={item?.id} item>
              <PhotoCard photo={item} />
            </Grid>
          ))
        ) : (
          <LottieAnimation
            animationData={NoData}
            label="You don´t have favorites for now"
          />
        )}
      </Grid>
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
