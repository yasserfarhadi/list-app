import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  title: string;
  presenter: string;
}

const SavedItem = ({ image, title, presenter }: Props) => {
  return (
    <div className="py-2.5 px-3 flex items-center gap-2 hover:bg-foreground/10 duration-500 cursor-pointer">
      <Image
        src={image}
        width={60}
        height={60}
        alt="presenter"
        className="rounded-sm"
      />
      <div className="flex-grow">
        <h5 className="text-foreground break-all leading-4">{title}</h5>
        <p className="text-foreground/25 text-sm">{presenter}</p>
      </div>
      <ChevronRight className="text-foreground/60 w-5 h-5" />
    </div>
  );
};

export default SavedItem;
