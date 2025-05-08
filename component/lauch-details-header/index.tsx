import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LaunchById } from "@/app/launch/[id]/type";
import { format } from "date-fns";

export default function LaunchDetailsHeader({
  launchData,
}: {
  launchData: NonNullable<LaunchById>;
}) {
  const image =
    launchData?.links?.mission_patch ||
    launchData?.links?.flickr_images?.at(-1) ||
    "/png/no-launch-image.png";

    return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          display: "flex",
          alignItems: "center",
          paddingLeft: 3,
        }}
      >
        <Stack color={"white"}>
          <Typography variant="h4" fontWeight={"bold"}>
            {launchData.mission_name}
          </Typography>

          <Typography fontSize={"14px"} pl={0.3}>
            {format(launchData?.launch_date_local, "dd/MM/yyyy")}

            <Box
              component="span"
              sx={{
                marginLeft: 1,
                fontWeight: 500,
                color: launchData.launch_success ? "green" : "red",
              }}
            >
              {launchData.launch_success ? "Success" : "Fail"}
            </Box>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
