import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#252526',
        foreground: '#FFFFFF',
        dark_bg: '#181818',
        light_bg: '#3A3A3B',
        ligher_bg: '#606063',
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
