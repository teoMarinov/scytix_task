import React from "react";
import YouTube from "react-youtube";
import { Box } from "@mui/material";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
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
