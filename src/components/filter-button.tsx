'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface Props {
  icon?: string;
  text: string;
  query: string;
  isActive: boolean;
}

const FilterButton = ({ query, text, icon, isActive }: Props) => {
  return (
    <button
      className={cn(
        'bg-foreground/10 text-white text-sm rounded-full px-4 py-1.5 leading-5 hover:bg-ligher_bg duration-500',
        isActive ? 'bg-blue-500 hover:bg-blue-400' : ''
      )}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default FilterButton;
