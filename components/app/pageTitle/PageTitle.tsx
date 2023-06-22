import React from "react";

import { Box, Typography } from "@mui/material";

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Box m={10}>
      <Typography variant="h6" sx={{ color: "#c4c4c4" }}>
        {title}
      </Typography>
    </Box>
  );
};
