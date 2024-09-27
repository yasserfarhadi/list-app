'use client';

import React from 'react';
import MenuItem from './menu-item';
import { LayoutGrid, Mic, Search } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import User from './User';
import { usePathname } from 'next/navigation';
const MenuNav = () => {
  const pathname = usePathname();
  return (
    <div
      className="bg-[radial-gradient(ellipse_at_top_right,_#223433_15%,_#1B3443_30%,_#252526_70%)]
    px-1.5 pt-1.5 pb-4 space-y-2"
    >
      <div className="pt-3 pb-2 px-3">
        <User />
      </div>
      <hr className="bg-foreground/20 h-[0.8px] border-t-0 w-[95%] mx-auto" />
      <div>
        <MenuItem
          text="Podcast"
          link="/"
          icon={<Mic width={18} height={18} />}
          isActive={pathname === '/'}
        />
        <MenuItem
          text="Books"
          link="/books"
          icon={<BookOpen width={18} height={18} />}
          isActive={pathname === '/books'}
        />
        <MenuItem
          text="Category"
          link="/category"
          icon={<LayoutGrid width={18} height={18} />}
          isActive={pathname === '/category'}
        />
        <MenuItem
          text="Search"
          link="/search"
          icon={<Search width={18} height={18} />}
          isActive={pathname === '/search'}
        />
      </div>
    </div>
  );
};

export default MenuNav;
