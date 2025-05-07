"use client";

import LaunchesListProps from "./type";
import LaunchCard from "@/component/launch-card";
import { Grid, useMediaQuery } from "@mui/material";

export default function LaunchesList({ launches }: LaunchesListProps) {
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  return (
    <div>
      <Grid container columns={isLargeScreen ? 2 : 1} spacing={3} padding={3}>
        {launches?.map(
          (launch) => launch && <LaunchCard key={launch.id} launch={launch} />
        )}
      </Grid>
    </div>
  );
}
