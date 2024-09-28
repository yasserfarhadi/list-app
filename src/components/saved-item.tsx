import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  presenter: string;
  onClick: () => void;
}

const SavedItem = ({ image, title, presenter, onClick }: Props) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 px-3 py-2.5 duration-500 hover:bg-foreground/10"
      onClick={onClick}
    >
      <Image
        src={image}
        width={60}
        height={60}
        alt="presenter"
        className="rounded-sm"
      />
      <div className="flex-grow">
        <h5 className="break-all leading-4 text-foreground">{title}</h5>
        <p className="text-sm text-foreground/25">{presenter}</p>
      </div>
      <ChevronRight className="h-5 w-5 text-foreground/60" />
    </div>
  );
};

export default SavedItem;
