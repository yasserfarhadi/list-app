'use client';

import React from 'react';
import FilterButton from './filter-button';
import { useSearchParams } from 'next/navigation';

const SavedFilters = () => {
  const searchParams = useSearchParams();
  const saved = searchParams.get('saved')?.trim();
  return (
    <div className="px-3 flex items-center gap-2">
      <FilterButton text="All" isActive={saved === 'all' || !saved} />
      <FilterButton text="Podcast" isActive={saved === 'podcast'} />
      <FilterButton text="Book" isActive={saved === 'book'} />
    </div>
  );
};

export default SavedFilters;
