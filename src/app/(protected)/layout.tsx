import MenuNav from '@/components/menu-nav';
import SavedItem from '@/components/saved-item';
import SavedFilters from '@/components/saved-filters';
import { Bookmark } from 'lucide-react';
import Header from '@/components/header';
import { headers } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(headers().get('x-url'));
  return (
    <div className="grid grid-cols-[280px,1fr] h-[100vh] gap-2">
      <div className="flex flex-col gap-2 w-[280px] h-full">
        <MenuNav />
        <div className="bg-background space-y-4 pt-4 flex-grow">
          <div className="text-foreground flex items-center gap-2 px-3">
            <Bookmark width={18} height={18} className="text-white/40" />
            <h5 className="text-xl font-bold tracking-wide">Saved Items</h5>
          </div>
          <SavedFilters />
          <div className="h-[calc(100vh-275px-116px)] overflow-auto overflow-x-hidden">
            <SavedItem
              image={'/images/bastards.png'}
              title="bastards"
              presenter="bastards"
            />
            <SavedItem
              image={'/images/bastards.png'}
              title="bastards"
              presenter="bastards"
            />
            <SavedItem
              image={'/images/bastards.png'}
              title="bastards"
              presenter="bastards"
            />
            <SavedItem
              image={'/images/bastards.png'}
              title="bastards"
              presenter="bastards"
            />
            <SavedItem
              image={'/images/bastards.png'}
              title="bastards"
              presenter="bastards"
            />
          </div>
        </div>
      </div>
      <div className="bg-background">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
