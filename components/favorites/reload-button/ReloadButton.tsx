import React from "react";

import { Box, Button, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { dictionary } from "@/dictionary";

interface IReloadButtonProps {
  handleUpdateFavorites: () => void;
}

export const ReloadButton = ({ handleUpdateFavorites }: IReloadButtonProps) => {
  return (
    <Box sx={styles.root}>
      <Button>
        <ReplayIcon sx={styles.icon} />
        <Typography
          variant="caption"
          onClick={handleUpdateFavorites}
          sx={styles.text}
        >
          {dictionary.favorites.reload}
        </Typography>
      </Button>
    </Box>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    m: 2,
  },
  icon: {
    mr: 1,
    transition: "all 1s ease-in-out",
    color: "#c4c4c4",
    "&:hover": {
      transform: "rotate(-360deg)",
    },
  },
  text: {
    color: "#c4c4c4",
  },
};
