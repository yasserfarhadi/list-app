import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lightenHexColor(hex: string, percent: number): string {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  const r: number = parseInt(hex.substring(0, 2), 16);
  const g: number = parseInt(hex.substring(2, 4), 16);
  const b: number = parseInt(hex.substring(4, 6), 16);

  const lightenChannel = (color: number, percent: number): number => {
    return Math.min(255, Math.round(color + (255 - color) * (percent / 100)));
  };

  const newR: number = lightenChannel(r, percent);
  const newG: number = lightenChannel(g, percent);
  const newB: number = lightenChannel(b, percent);

  return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase()}`;
}
