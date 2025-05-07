"use client";
import { getLaunchById } from "@/api/launches";
import { useEffect, useState } from "react";
import LauchPageProps, { LaunchById } from "./type";
import LaunchDetailsHeader from "@/component/lauch-details-header";
import Loader from "@/component/loader";

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
    </div>
  );
}
