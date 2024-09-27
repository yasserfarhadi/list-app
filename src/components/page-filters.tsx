'use client';

import React from 'react';
import FilterButton from './filter-button';
import { useSearchParams } from 'next/navigation';
import { Flame, Lightbulb, Palette } from 'lucide-react';

const PageFilters = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter')?.trim();
  return (
    <div className=" flex items-center gap-2">
      <FilterButton text="All" isActive={!filter || filter === 'all'} />
      <FilterButton
        text="Productivity"
        icon={<Lightbulb width={18} height={18} />}
        isActive={filter === 'productivity'}
      />
      <FilterButton
        text="Creative"
        icon={<Palette width={18} height={18} />}
        isActive={filter === 'creative'}
      />
      <FilterButton
        text="Trend"
        icon={<Flame width={18} height={18} />}
        isActive={filter === 'trend'}
      />
    </div>
  );
};

export default PageFilters;
