"use client";

import { Stack } from "@mui/material";
import Loader from "@/component/loader";
import { useEffect, useState } from "react";
import { getLaunchById } from "@/api/launches";
import RocketInfo from "@/component/rocket-info";
import LauchPageProps, { LaunchById } from "./type";
import LaunchDetailsHeader from "@/component/lauch-details-header";
import YouTubeEmbed from "@/component/youtube-embed";

export default function LauchPage({ params }: LauchPageProps) {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [launchData, setLaunchData] = useState<LaunchById | null>(null);

  useEffect(() => {
    params.then(({ id }) => setId(id));

    getLaunchById(id)
      .then(({ data }) => setLaunchData(data.launch))
      .finally(() => setLoading(false));
  }, [id, params]);

  if (loading) return <Loader />;

  if (!launchData) return "No Data";

  return (
    <div>
      <LaunchDetailsHeader launchData={launchData} />

      <Stack padding={3} gap={4}>
        <RocketInfo
          title={launchData.rocket?.rocket_name as string}
          description={launchData.rocket?.rocket?.description as string}
        />

        <YouTubeEmbed videoId="OvHJSIKP0Hg" />
      </Stack>
    </div>
  );
}
