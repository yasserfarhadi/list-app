'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import StatButton from './stat-button';
import { Flame, Heart, Lightbulb, Palette, Zap } from 'lucide-react';
import FilterButton from './filter-button';
import PageFilters from './page-filters';
import SearchBox from './search-box';

const Header = () => {
  const pathname = usePathname();
  const title = pathname && (pathname === '/' ? 'Podcast' : pathname.slice(1));
  return (
    <header className="bg-background text-foreground py-5 px-7 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="space-y-0.5">
            <div className="w-[5px] h-[5px] bg-blue-500"></div>
            <div className="w-[5px] h-[5px] bg-blue-500"></div>
            <div className="w-[5px] h-[5px] bg-blue-500"></div>
          </div>
          <h3 className="capitalize text-[22px] tracking-wide font-bold">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <StatButton stat={90} icon={<Zap width={18} height={18} />} />
          <StatButton stat={100} icon={<Heart width={18} height={18} />} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <PageFilters />
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
