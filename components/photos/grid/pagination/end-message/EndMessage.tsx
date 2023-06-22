import React from "react";

import { LottieAnimation } from "@/components/app/lottie/LottieAnimation";
import { Box, Typography } from "@mui/material";

import { Photo } from "@/interfaces/photo.interface";
import NoDataAnimation from "../../../../../public/no-data.json";

export const EndMessage = ({ photos }: { photos: Photo[] }) => {
  return (
    <Box>
      {photos?.length === 0 ? (
        <LottieAnimation
          animationData={NoDataAnimation}
          label="No data for this filter"
        />
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: ".5rem",
            color: "rgba(0, 0, 0, 0.54)",
          }}
        >
          No more photos
        </Typography>
      )}
    </Box>
  );
};
