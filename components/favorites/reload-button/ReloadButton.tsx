import React from "react";

import { Box, Button, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { dictionary } from "@/dictionary";

interface IReloadButtonProps {
  handleUpdateFavorites: () => void;
}

export const ReloadButton = ({ handleUpdateFavorites }: IReloadButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        m: 2,
      }}
    >
      <Button>
        <ReplayIcon
          sx={{
            mr: 1,
            transition: "all 1s ease-in-out",
            "&:hover": {
              transform: "rotate(-360deg)",
            },
          }}
        />
        <Typography variant="caption" onClick={handleUpdateFavorites}>
          {dictionary.favorites.reload}
        </Typography>
      </Button>
    </Box>
  );
};
