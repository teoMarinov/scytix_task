"use client";

import Loader from "@/component/loader";
import { LaunchQueryResult } from "./type";
import { useEffect, useState } from "react";
import LaunchCard from "@/component/launch-card";
import { fetchAllLaunches, getAllLauchesCount } from "@/api/launches";
import { Grid, Stack, Pagination, useMediaQuery } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [launches, setLaunches] = useState<LaunchQueryResult[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const isLargeScreen = useMediaQuery("(min-width:700px)");

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true);

        const response = await fetchAllLaunches(page);

        setLaunches(response.data.launches || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }

      const pageCount = await getAllLauchesCount();
      
      setTotalPages(pageCount);
    };

    fetchLaunches();
  }, [page]);

  if (loading) return <Loader />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Stack alignItems="center" pb={3}>
      <Grid container columns={isLargeScreen ? 2 : 1} spacing={2} px={2} pb={3}>
        {launches.map((launch) =>
          launch ? <LaunchCard key={launch.id} launch={launch} /> : null
        )}
      </Grid>

      <Pagination
        page={page}
        count={totalPages}
        onChange={(_, newPage) => setPage(newPage)}
      />
    </Stack>
  );
}
