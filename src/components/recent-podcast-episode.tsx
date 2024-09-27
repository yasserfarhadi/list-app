import { lightenHexColor } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  host: string;
  summary: string;
  episode: number;
  brandColor: string;
}

const RecentPodcastEpisode = ({
  image,
  host,
  summary,
  brandColor,
  episode,
}: Props) => {
  return (
    <div
      className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md p-4 duration-500"
      style={{
        background: `linear-gradient(to right, ${brandColor} 0%, transparent 110%)`,
      }}
    >
      <div
        className="absolute z-0 h-52 w-72 translate-x-[-67%] rounded-full p-3 duration-500 group-hover:scale-110"
        style={{ backgroundColor: `${lightenHexColor(brandColor, 30)}` }}
      >
        <div
          className="h-full rounded-full p-2"
          style={{ backgroundColor: `${lightenHexColor(brandColor, 40)}` }}
        >
          <div
            className="h-full rounded-full"
            style={{ backgroundColor: `${lightenHexColor(brandColor, 50)}` }}
          ></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-background opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Image
        src={image}
        width={80}
        height={80}
        alt="presenter"
        className="z-10 rounded-sm"
      />
      <div className="z-10 flex-grow">
        <h5 className="mb-1 break-all leading-3 text-foreground">{host}</h5>
        <h6 className="mb-1.5 text-sm text-white/70">Episode {episode}</h6>
        <p className="line-clamp-2 break-all text-xs leading-3 text-white/70">
          {summary}
        </p>
      </div>
      <ChevronRight className="z-10 ml-5 h-12 w-12 text-foreground/60" />
    </div>
  );
};

export default RecentPodcastEpisode;
