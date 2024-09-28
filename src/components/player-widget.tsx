import React from "react";
import { usePlayer } from "@/context/player";
import Image from "next/image";
import { Pause, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PlayerWidget = () => {
  const player = usePlayer();
  return (
    <AnimatePresence>
      {player?.state.isMinimized && (
        <motion.div
          className="fixed right-5 flex w-[350px] cursor-pointer items-center gap-2 rounded-lg bg-light_bg p-2"
          onClick={() => player?.dispatch({ type: "MAXIMIZE" })}
          initial={{ bottom: -100, opacity: 0 }}
          animate={{ bottom: 20, opacity: 1 }}
          transition={{ type: "spring", duration: 300, mass: 1 }}
        >
          <Image
            src={"/images/theo.png"}
            width={80}
            height={80}
            alt="presenter"
            className="rounded-sm"
          />
          <div className="flex-grow">
            <h5 className="break-all leading-4 text-foreground">
              Huberman Lab
            </h5>
            <p className="text-sm text-foreground/25">Huberman</p>
          </div>
          <div className="space-x-1 text-white">
            <button
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-background/40 p-1.5 duration-500 hover:bg-white/30"
            >
              <Pause width={16} height={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                player?.dispatch({ type: "CLOSE" });
              }}
              className="rounded-full bg-background/40 p-1.5 duration-500 hover:bg-white/30"
            >
              <X width={16} height={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlayerWidget;
