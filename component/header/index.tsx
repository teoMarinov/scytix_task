"use client";

import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box padding={2} >
        <Link href={"/"}>
          <Image
            aria-hidden
            height={22}
            width={160}
            src={"/logo.svg"}
            alt={"Header site icon"}
          />
        </Link>
      </Box>
    </header>
  );
}
