"use client";

import { Pagination, useMediaQuery } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClientPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set("page", newPage.toString());
    router.push(`/?${params}`);
  };

  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      onChange={handleChange}
      size={isLargeScreen ? "medium" : "small"}
    />
  );
}
