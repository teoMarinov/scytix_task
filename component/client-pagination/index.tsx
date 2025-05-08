"use client";

import { useRouter } from "next/navigation";
import { Pagination, useMediaQuery } from "@mui/material";

export default function ClientPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    router.push(`/?page=${newPage}`);
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
