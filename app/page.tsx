import { Stack } from "@mui/material";
import { LaunchQueryResult } from "./type";
import LauchesList from "@/component/launches-list";
import ClientPagination from "@/component/client-pagination";
import { fetchAllLaunches, getAllLauchesCount } from "@/api/launches";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");

  const { data } = await fetchAllLaunches(page);
  const totalPages = await getAllLauchesCount();
  const launches: LaunchQueryResult[] = data.launches || [];

  return (
    <Stack alignItems="center" pb={3}>
      <LauchesList launches={launches} />

      <ClientPagination totalPages={totalPages} currentPage={page} />
    </Stack>
  );
}
