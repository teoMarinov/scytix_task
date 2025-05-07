"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header() {
  const rounter = useRouter();

  return (
    <header>
      <Box padding={2} pb={0}>
        <Box onClick={() => rounter.push("/")} sx={{ cursor: "pointer" }}>
          <Image
            aria-hidden
            height={22}
            width={160}
            src={"/logo.svg"}
            alt={"Header site icon"}
          />
        </Box>
      </Box>
    </header>
  );
}
