import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile: 'url(/pattern-bg-mobile.png)',
        desktop: 'url(/pattern-bg-desktop.png)',
        'icon-arrow': 'url(/icon-arrow.svg)',
      },
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
export default config;
