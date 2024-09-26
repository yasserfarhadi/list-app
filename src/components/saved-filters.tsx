'use client';

import React from 'react';
import FilterButton from './filter-button';
import { useSearchParams } from 'next/navigation';

const SavedFilters = () => {
  const searchParams = useSearchParams();
  const saved = searchParams.get('saved')?.trim();
  return (
    <div className="px-3 space-x-2">
      <FilterButton
        query="recent"
        text="All"
        isActive={saved === 'all' || !saved}
      />
      <FilterButton
        query="recent"
        text="Podcast"
        isActive={saved === 'podcast'}
      />
      <FilterButton query="recent" text="Book" isActive={saved === 'book'} />
    </div>
  );
};

export default SavedFilters;
