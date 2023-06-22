import React from "react";

import { LottieOptions, useLottie } from "lottie-react";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styles } from "./lottieAnimation.styles";

interface ILottieAnimationProps {
  animationData: LottieOptions["animationData"];
  label: string;
}

export const LottieAnimation = ({
  animationData,
  label,
}: ILottieAnimationProps) => {
  const Options: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    height: 1000,
  };
  const { View } = useLottie(Options);
  return (
    <Box sx={styles.root}>
      <Typography variant="subtitle2" mt={10} sx={styles.label}>
        {label}
      </Typography>

      {View}
    </Box>
  );
};
