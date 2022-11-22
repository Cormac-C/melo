/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#B388F5",
          DEFAULT: "#590DE5",
          dark: "#340984",
        },
      },
    },
  },
  plugins: [],
};
