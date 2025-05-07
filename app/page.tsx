import { fetchAllLaunches } from "@/api/launches";
import LaunchesList from "@/component/launches-list";

export default async function Home() {
  const {
    data: { launches },
    loading,
    error,
  } = await fetchAllLaunches(1);

  if (loading) return <p>Page is loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return launches && <LaunchesList launches={launches} />;
}
