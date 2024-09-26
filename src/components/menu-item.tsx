import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  link: string;
  icon: React.ReactNode;
  isActive: boolean;
}
const MenuItem = ({ text, link, icon, isActive }: Props) => {
  return (
    <div
      className={cn(
        'hover:bg-foreground/10 duration-500 rounded-md text-foreground px-3 py-2.5',
        isActive && 'bg-foreground/20 hover:bg-foreground/20'
      )}
    >
      <Link href={link} className="flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
