"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  icon?: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({ text, icon, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "itms-center flex gap-1 rounded-full bg-foreground/10 px-4 py-1.5 text-sm leading-5 text-white duration-500 hover:bg-ligher_bg",
        isActive ? "bg-blue-500 hover:bg-blue-400" : "",
      )}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default FilterButton;
