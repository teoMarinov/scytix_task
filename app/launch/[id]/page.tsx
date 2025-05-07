"use client";
import { getLaunchById } from "@/api/launches";
import { useEffect, useState } from "react";
import LauchPageProps, { LaunchById } from "./type";

export default function LauchPage({ params }: LauchPageProps) {
  const [id, setId] = useState("");
  const [lauchData, setLaunchData] = useState<LaunchById | null>(null);

  useEffect(() => {
    params.then(({ id }) => setId(id));
    getLaunchById(id).then(({ data }) => setLaunchData(data.launch));
  }, [id, params]);

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
