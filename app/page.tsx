import styles from "./page.module.css";
import { fetchAllLaunches } from "@/api/launches";

export default async function Home() {
  const {
    data: { launches },
    loading,
    error,
  } = await fetchAllLaunches(1);

  if (loading) return <p>Page is loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.page}>
      {launches &&
        launches.map(
          (launch) => launch && <p key={launch.id}>{launch.mission_name}</p>
        )}
    </div>
  );
}
