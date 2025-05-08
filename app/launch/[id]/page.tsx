import LauchPageProps from "./type";
import { Stack } from "@mui/material";
import { notFound } from "next/navigation";
import { getLaunchById } from "@/api/launches";
import RocketInfo from "@/component/rocket-info";
import YouTubeEmbed from "@/component/youtube-embed";
import { getYouTubeVideoId } from "@/utils/extractYoutubeId";
import LaunchDetailsHeader from "@/component/lauch-details-header";

export default async function LauchPage({ params }: LauchPageProps) {
  const { id } = await params;

  const { data } = await getLaunchById(id);
  const launchData = data?.launch;

  if (!launchData) return notFound();

  const videoId = getYouTubeVideoId(launchData.links?.video_link);

  return (
    <div>
      <LaunchDetailsHeader launchData={launchData} />

      <Stack padding={3} gap={4}>
        <RocketInfo
          title={launchData.rocket?.rocket_name as string}
          description={launchData.rocket?.rocket?.description as string}
        />

        {videoId && <YouTubeEmbed videoId={videoId} />}
      </Stack>
    </div>
  );
}
