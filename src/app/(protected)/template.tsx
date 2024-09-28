"use client";

import MenuNav from "@/components/menu-nav";
import SavedItem from "@/components/saved-item";
import SavedFilters from "@/components/saved-filters";
import { Bookmark } from "lucide-react";
import Header from "@/components/header";
import PlayerDrawer from "@/components/drawer";
import { usePlayer } from "@/context/player";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const player = usePlayer();
  return (
    <div className="grid max-h-[100vh] grid-cols-[280px,calc(100vw-288px)] gap-2 overflow-x-hidden">
      <div className="flex h-full w-[280px] flex-col gap-2">
        <MenuNav />
        <div className="flex-grow space-y-4 bg-background pt-4">
          <div className="flex items-center gap-2 px-3 text-foreground">
            <Bookmark width={18} height={18} className="text-white/40" />
            <h5 className="text-xl font-bold tracking-wide">Saved Items</h5>
          </div>
          <SavedFilters />
          <div className="v-no-scrollbar h-[calc(100vh-275px-116px)] overflow-auto overflow-x-hidden">
            <SavedItem
              image={"/images/bastards.png"}
              title="bastards"
              presenter="bastards"
              onClick={() => player?.setItem("1")}
            />
            <SavedItem
              image={"/images/bastards.png"}
              title="bastards"
              presenter="bastards"
              onClick={() => player?.setItem("1")}
            />
            <SavedItem
              image={"/images/bastards.png"}
              title="bastards"
              presenter="bastards"
              onClick={() => player?.setItem("1")}
            />
            <SavedItem
              image={"/images/bastards.png"}
              title="bastards"
              presenter="bastards"
              onClick={() => player?.setItem("1")}
            />
            <SavedItem
              image={"/images/bastards.png"}
              title="bastards"
              presenter="bastards"
              onClick={() => player?.setItem("1")}
            />
          </div>
        </div>
      </div>
      <div
        className="max-h-[100vh] overflow-y-auto bg-background duration-300"
        style={{
          marginRight:
            player?.state.isOpen && !player.state.isMinimized ? "338px" : "0",
        }}
      >
        <Header />
        <div>{children}</div>
      </div>
      <PlayerDrawer />
    </div>
  );
}
