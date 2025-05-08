"use client";

import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";
import { Paper, InputBase } from "@mui/material";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function DesktopSearchbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [input, setInput] = useState(searchParams.get("mission_name") || "");
  const [debouncedInput] = useDebounce(input, 500);

  useEffect(() => {
    setInput(searchParams.get("mission_name") || "");
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    const page = params.get("page");

    if (debouncedInput) {
      params.set("mission_name", debouncedInput);
    } else {
      params.delete("mission_name");
    }

    if (page) {
      params.delete("page");
    }

    //Header is always loaded so to prevent redirecting to '/' when changing the route
    // while allowing for the input to redicret to home after using it we use this check
    if (pathname === "/" || params.has("mission_name"))
      router.push(`/?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInput]);

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
