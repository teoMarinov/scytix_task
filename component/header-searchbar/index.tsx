"use client";

import { Suspense } from "react";
import HeaderSearchbarProps from "./type";
import DesktopSearchbar from "../desktop-searchbar";
import MobileSearchModal from "../mobile-search-modal";

export default function HeaderSearchbar({
  isLargeScreen,
}: HeaderSearchbarProps) {
  return (
    <Suspense>
      {isLargeScreen ? <DesktopSearchbar /> : <MobileSearchModal />}
    </Suspense>
  );
}
