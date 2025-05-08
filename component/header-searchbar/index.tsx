"use client";

import DesktopSearchbar from "../desktop-searchbar";
import MobileSearchModal from "../mobile-search-modal";

export default function HeaderSearchbar({
  isLargeScreen,
}: {
  isLargeScreen: boolean;
}) {
  return isLargeScreen ? <DesktopSearchbar /> : <MobileSearchModal />;
}
