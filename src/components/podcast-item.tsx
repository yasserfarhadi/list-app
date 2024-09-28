import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  host: string;
  hasNewPost?: boolean;
  onClick: () => void;
}

const PodcastItem = ({ image, title, hasNewPost, host, onClick }: Props) => {
  return (
    <div
      className="group relative w-[120px] shrink-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src={image}
          width={120}
          height={120}
          alt="podcast"
          className="rounded-md"
        />
        <div className="absolute inset-0 z-10 bg-transparent duration-500 hover:bg-dark_bg/30" />
      </div>
      <h3 className="mt-2 break-all px-1 leading-5 duration-500 group-hover:text-white/60">
        {title}
      </h3>
      <p className="px-1 text-sm text-white/30 duration-500 group-hover:text-white/20">
        {host}
      </p>
      {hasNewPost && (
        <div className="absolute right-0 top-0 z-20 h-3 w-3 translate-x-[30%] translate-y-[-30%] rounded-full bg-blue-400" />
      )}
    </div>
  );
};

export default PodcastItem;
