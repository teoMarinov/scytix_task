"use client";

import { LaunchQueryResult } from "./type";
import { useEffect, useState } from "react";
import LaunchCard from "@/component/launch-card";
import { fetchAllLaunches, getAllLauchesCount } from "@/api/launches";
import {
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  useMediaQuery,
} from "@mui/material";

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
    };

    fetchLaunches();
    getAllLauchesCount().then((pageCount) => setTotalPages(pageCount));
  }, [page]);

  if (loading)
    return (
      <p>
        <CircularProgress />
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Stack alignItems="center">
        <Grid container columns={isLargeScreen ? 2 : 1} spacing={3} padding={3}>
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
    </div>
  );
}
