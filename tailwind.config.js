/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        amazingKids: "'AmazingKids', serif",
        satoshiBold: "'SatoshiBold', serif",
        satoshiRegular: "'SatoshiRegular', serif",
        satoshiLight: "'SatoshiLight', serif",
        clashDisplay: "'ClashDisplay', serif",
      },
      spacing: {
        is01px: '1px',
        529: '529px',
      },
    },
  },
  plugins: [],
};
