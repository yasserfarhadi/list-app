"use client";

import MenuNav from "@/components/menu-nav";
import { Bookmark } from "lucide-react";
import Header from "@/components/header";
import PlayerDrawer from "@/components/drawer";
import { usePlayer } from "@/context/player";
import PlayerWidget from "@/components/player-widget";
import { motion } from "framer-motion";
import SavedItemContaienr from "@/components/saved-item-container";

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
          <SavedItemContaienr />
        </div>
      </div>
      <motion.div
        className="max-h-[100vh] overflow-y-auto bg-background"
        initial={{ marginRight: 0 }}
        animate={{
          marginRight:
            player?.state.isOpen && !player.state.isMinimized ? 338 : 0,
        }}
        transition={{ type: "spring", duration: 300, mass: 1 }}
      >
        <Header />
        <div>{children}</div>
      </motion.div>
      <PlayerDrawer />
      <PlayerWidget />
    </div>
  );
}
