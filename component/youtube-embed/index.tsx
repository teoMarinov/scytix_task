"use client";
import React from "react";
import YouTube from "react-youtube";
import { Box } from "@mui/material";
import YoutubeEmbededProps from "./type";

export default function YouTubeEmbed({ videoId }: YoutubeEmbededProps) {
  const opts = {
    height: "420",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "420 * 16 / 9", mx: "auto" }}>
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
}
