/** @type {import('tailwindcss').Config} */

const { blackA, slate } = require('@radix-ui/colors');
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/.css",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        transparent: 'transparent',
        current: 'currentColor',
        primary: slate.slate11,
        darkText: slate.slate3,
        darkHeading: slate.slate3,
        darkBg1: 
        {
          100: slate.slate6,
          200 : slate.slate8,

        },
      },
    },
  },
  plugins: [],
}
