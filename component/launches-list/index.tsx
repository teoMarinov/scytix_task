"use client";

import LauchesListProps from "./type";
import LaunchCard from "../launch-card";
import { Grid, useMediaQuery } from "@mui/material";

export default function LauchesList({ launches }: LauchesListProps) {
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  return (
    <Grid container columns={isLargeScreen ? 2 : 1} spacing={2} px={2} pb={3}>
      {launches.map(
        (launch) => launch && <LaunchCard key={launch.id} launch={launch} />
      )}
    </Grid>
  );
}
