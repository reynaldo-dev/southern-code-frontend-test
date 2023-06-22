import React from "react";

import { Box } from "@mui/material";
import { LottieAnimation } from "@/components/app/lottie/LottieAnimation";
import loading from "react-useanimations/lib/loading";

import LoadingAnimation from "../../../../../public/loading.json";
import UseAnimations from "react-useanimations";

export const LoaderPage = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <LottieAnimation animationData={LoadingAnimation} label="Loading" />
      ) : (
        <UseAnimations
          animation={loading}
          size={60}
          strokeColor="#c4c4c4"
          style={{ textAlign: "center", marginTop: "20px" }}
        />
      )}
    </Box>
  );
};
