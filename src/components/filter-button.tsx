'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  icon?: React.ReactNode;
  text: string;
  isActive: boolean;
}

const FilterButton = ({ text, icon, isActive }: Props) => {
  return (
    <button
      className={cn(
        'flex itms-center gap-1 bg-foreground/10 text-white text-sm rounded-full px-4 py-1.5 leading-5 hover:bg-ligher_bg duration-500',
        isActive ? 'bg-blue-500 hover:bg-blue-400' : ''
      )}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default FilterButton;
