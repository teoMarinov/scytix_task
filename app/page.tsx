import { Stack } from "@mui/material";
import LauchesList from "@/component/launches-list";
import HomeProps, { LaunchQueryResult } from "./type";
import ClientPagination from "@/component/client-pagination";
import { fetchAllLaunches, getAllLauchesCount } from "@/api/launches";

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const { mission_name } = params;
  const page = parseInt(params.page || "1");

  const { data } = await fetchAllLaunches(page, mission_name);
  const totalPages = await getAllLauchesCount();
  const launches: LaunchQueryResult[] = data.launches || [];

  return (
    <Stack alignItems="center" pb={3}>
      <LauchesList launches={launches} />

      <ClientPagination totalPages={totalPages} currentPage={page} />
    </Stack>
  );
}
