import React from "react";
import { Box, Typography } from "@mui/material";

export default function RocketInfo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Box>
  );
}
