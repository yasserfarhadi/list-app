"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { usePlayer } from "@/context/player";
import {
  Bookmark,
  ChevronDown,
  FastForward,
  Gauge,
  MessageSquareHeart,
  Play,
  Rewind,
  SkipForward,
  X,
} from "lucide-react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";

const PlayerDrawer = () => {
  const player = usePlayer();

  return (
    <Drawer
      direction="right"
      open={player?.state.isOpen && !player?.state.isMinimized}
      handleOnly
    >
      <DrawerContent
        draggable="false"
        onDrag={(e) => e.preventDefault()}
        className="right-0 top-0 flex h-full w-[330px] flex-col overflow-x-hidden bg-background text-white"
      >
        <DrawerHeader className="bg-black p-4">
          <DrawerTitle className="flex items-center justify-between gap-2">
            <button
              onClick={() => player?.dispatch({ type: "MINIMIZE" })}
              className="rounded-full bg-background p-1.5 duration-500 hover:bg-white/30"
            >
              <ChevronDown width={16} height={16} />
            </button>
            <h4 className="line-clamp-1 flex-grow break-all font-normal">
              Podcast title
            </h4>
            <button className="rounded-full bg-background p-2 duration-500 hover:bg-white/30">
              <Bookmark width={16} height={16} />
            </button>
            <button className="rounded-full bg-background p-2 duration-500 hover:bg-white/30">
              <MessageSquareHeart width={16} height={16} />
            </button>
            <button
              onClick={() => player?.dispatch({ type: "CLOSE" })}
              className="rounded-full bg-background p-2 duration-500 hover:bg-white/30"
            >
              <X width={16} height={16} />
            </button>
          </DrawerTitle>
        </DrawerHeader>
        <div className="relative flex flex-grow flex-col">
          <div
            className="z-1 absolute inset-0"
            style={{
              backgroundImage: `url(/images/huberman.jpg)`,
              backgroundPosition: "top center",
              backgroundSize: " 250%",
              backgroundRepeat: "no-repeat",
              filter: "blur(15px)",
            }}
          />
          <div className="absolute inset-0 z-0 bg-dark_bg/50" />
          <div className="z-10 h-[calc(100vh-64px)] space-y-10 overflow-y-auto px-4 pb-8">
            <div className="mt-12">
              <Image
                src={"/images/huberman.jpg"}
                width={120}
                height={120}
                alt="podcast"
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="space-y-.5">
              <p className="text-xs text-white/60">Chapter 7</p>
              <h5 className="mb-.5">Rejecting Social Norms For Justice</h5>
              <p className="text-sm text-white/60">Daily Stoic</p>
            </div>
            <div className="space-y-2">
              <Slider defaultValue={[50]} max={100} step={1} className="" />
              <div className="flex items-center justify-between text-xs">
                <span>04:24</span>
                <span>17:39</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="rounded-full p-3 duration-500 hover:bg-white/30">
                <Gauge width={20} height={20} />
              </button>
              <button className="rounded-full p-3 duration-500 hover:bg-white/30">
                <Rewind width={20} height={20} />
              </button>
              <button className="rounded-full bg-white p-4 text-black duration-500 hover:bg-white/30">
                <Play width={20} height={20} />
              </button>
              <button className="rounded-full p-3 duration-500 hover:bg-white/30">
                <FastForward width={20} height={20} />
              </button>
              <button className="rounded-full p-3 duration-500 hover:bg-white/30">
                <SkipForward width={20} height={20} />
              </button>
            </div>
            <div className="space-y-3">
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
              <div className="group flex items-center justify-between">
                <p className="text-sm duration-500 group-hover:text-white/60">
                  Rejecting Social Norms For
                </p>

                <button className="rounded-full border p-1.5 text-white duration-500 group-hover:text-white/60">
                  <Play
                    width={10}
                    height={10}
                    className="duration-500 group-hover:text-white/60"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default PlayerDrawer;
