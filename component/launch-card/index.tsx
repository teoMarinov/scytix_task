"use client";

import { format } from "date-fns";
import LaunchCardProps from "./type";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LaunchCard({ launch }: LaunchCardProps) {
  const router = useRouter();

  return (
    <Grid
      size={1}
      border={1}
      padding={2}
      borderRadius={2}
      borderColor={"darkgrey"}
      sx={{
        cursor: "pointer",
        boxShadow: " 1px 1px 10px rgba(140, 140, 140, 0.88)",
      }}
      onClick={() => router.push(`/launch/${launch.id}`)}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize={23} fontWeight={"bold"}>
          {launch.mission_name}
        </Typography>

        <Typography mt={0.35}>
          {format(launch.launch_date_local, "dd/MM/yyyy")}
        </Typography>
      </Box>
      <Typography>Rocket: {launch.rocket?.rocket_name}</Typography>
      <Typography>
        Launch site: {launch.launch_site?.site_name || "-"}
      </Typography>
      <Typography>Success: {launch.launch_success ? "Yes" : "No"}</Typography>
    </Grid>
  );
}
