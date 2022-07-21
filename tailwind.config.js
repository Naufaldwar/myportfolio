/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3252DF",
        gray: { 300: "#B0B0B0" },
        black: "#152C5B",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
