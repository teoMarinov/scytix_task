import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      position={'fixed'}
      bgcolor={'white'}
      zIndex={2000}
    >
      <CircularProgress />
    </Box>
  );
}
