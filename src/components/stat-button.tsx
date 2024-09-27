import React from 'react';

interface Props {
  icon: React.ReactNode;
  stat: number;
}

const StatButton = ({ icon, stat }: Props) => {
  return (
    <div className="flex items-center gap-1 bg-foreground/10 text-white text-sm rounded-full px-3 py-1.5 leading-5 hover:bg-ligher_bg duration-500">
      {icon}
      <span>{stat}</span>
    </div>
  );
};

export default StatButton;
