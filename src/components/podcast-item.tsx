import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  host: string;
  hasNewPost: boolean;
}

const PodcastItem = ({ image, title, hasNewPost, host }: Props) => {
  return (
    <div className="relative w-[120px] shrink-0 cursor-pointer">
      <Image
        src={image}
        width={120}
        height={120}
        alt="podcast"
        className="rounded-md"
      />
      <h3 className="mt-2 px-1 leading-5">{title}</h3>
      <p className="px-1 text-sm text-white/60">{host}</p>
      <div className="absolute right-0 top-0 z-20 h-3 w-3 translate-x-[30%] translate-y-[-30%] rounded-full bg-blue-400" />
      <div className="absolute inset-0 z-10 bg-transparent duration-500 hover:bg-dark_bg/30" />
    </div>
  );
};

export default PodcastItem;
