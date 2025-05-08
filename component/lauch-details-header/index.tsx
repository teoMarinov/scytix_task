"use client";

import React from "react";
import { format } from "date-fns";
import LauchDetailsHeaderProps from "./type";
import LaunchSuccessIcon from "../launch-succes-icon";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

export default function LaunchDetailsHeader({
  launchData,
}: LauchDetailsHeaderProps) {
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  const image =
    launchData?.links?.mission_patch ||
    launchData?.links?.flickr_images?.at(-1) ||
    "/png/no-launch-image.png";

  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      <Box
        sx={{
          px: 3,
          top: 0,
          left: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          width: isLargeScreen ? "50%" : "auto",
          background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      >
        <Stack color={"white"}>
          <Typography variant="h4" fontWeight={"bold"}>
            {launchData.mission_name}
          </Typography>

          <Typography
            gap={1}
            pl={0.3}
            display={"flex"}
            fontSize={"16px"}
            alignItems={"center"}
          >
            {format(launchData?.launch_date_local, "dd/MM/yyyy")}

            <LaunchSuccessIcon success={Boolean(launchData.launch_success)} />
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
