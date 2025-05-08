"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderSearchbar from "../header-searchbar";
import { Grid, useMediaQuery } from "@mui/material";

export default function Header() {
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  return (
    <header>
      <Grid
        container
        alignItems="center"
        padding={2}
        spacing={2}
        width={"100%"}
      >
        <Grid size={3.5}>
          <Link href="/">
            <Image
              aria-hidden
              height={22}
              width={160}
              src="/logo.svg"
              alt="Header site icon"
            />
          </Link>
        </Grid>

        <Grid size={isLargeScreen ? 5 : 8.5} justifyItems={"end"}>
          <HeaderSearchbar isLargeScreen={isLargeScreen} />
        </Grid>
      </Grid>
    </header>
  );
}
