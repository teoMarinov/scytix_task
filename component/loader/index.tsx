import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      zIndex={2000}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      bgcolor={"white"}
      position={"fixed"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress />
    </Box>
  );
}
