import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] to-stone-500 from-background">
      {children}
    </div>
  );
};

export default Layout;
