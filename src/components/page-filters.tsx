"use client";

import React from "react";
import FilterButton from "./filter-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Flame, Lightbulb, Palette } from "lucide-react";

const PageFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filter = searchParams.get("filter") || "All";
  const createQueryString = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("filter", value);

      return params.toString();
    },
    [searchParams],
  );

  function changeHandler(value: string) {
    router.push(pathname + "?" + createQueryString(value));
  }
  return (
    <div className="flex items-center gap-2">
      <FilterButton
        text="All"
        isActive={!filter || filter === "All"}
        onClick={() => changeHandler("All")}
      />
      <FilterButton
        text="Productivity"
        icon={<Lightbulb width={18} height={18} />}
        isActive={filter === "Productivity"}
        onClick={() => changeHandler("Productivity")}
      />
      <FilterButton
        text="Creative"
        icon={<Palette width={18} height={18} />}
        isActive={filter === "Creative"}
        onClick={() => changeHandler("Creative")}
      />
      <FilterButton
        text="Trend"
        icon={<Flame width={18} height={18} />}
        isActive={filter === "Trend"}
        onClick={() => changeHandler("Trend")}
      />
    </div>
  );
};

export default PageFilters;
