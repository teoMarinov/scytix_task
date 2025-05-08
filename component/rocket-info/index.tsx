import RocketInfoProps from "./type";
import { Box, Typography } from "@mui/material";

export default function RocketInfo({ title, description }: RocketInfoProps) {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 0.5 }}>
        {title}
      </Typography>

      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Box>
  );
}
