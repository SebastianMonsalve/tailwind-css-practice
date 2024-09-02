/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#4900FF",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#F3F4F6",
      darkGray: "#bfc2c7",
    },
    fontFamily: {
      sanss: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
