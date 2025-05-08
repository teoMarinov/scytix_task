"use client";

import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";
import { Paper, InputBase } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function DesktopSearchbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [input, setInput] = useState(searchParams.get("mission_name") || "");
  const [debouncedInput] = useDebounce(input, 500);

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (debouncedInput) {
      params.set("mission_name", debouncedInput);
    } else {
      params.delete("mission_name");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedInput, pathname, router, searchParams]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 8px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        value={input}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Launch"
        onChange={(e) => setInput(e.target.value)}
      />
    </Paper>
  );
}
