/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#B388F5",
          default: "#590DE5",
          dark: "#340984",
        },
      },
    },
    gridTemplateColumns: {
      'fill-15': 'repeat(auto-fill, 15rem)',
      'fill-7': 'repeat(auto-fill, 7rem)',
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
