"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function NotFound() {
  const pathname = usePathname();
  const launchId = pathname.split("/").pop();

  return (
    <Box
      padding={4}
      width="100%"
      height="100vh"
      display="flex"
      position="fixed"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h4" gutterBottom>
        404 Could not be found
      </Typography>

      <Typography variant="body1" gutterBottom>
        We couldn’t find the launch with ID: <strong>{launchId}</strong>
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        component={Link}
        href="/"
        sx={{ marginTop: 3 }}
      >
        Back to All Launches
      </Button>
    </Box>
  );
}
