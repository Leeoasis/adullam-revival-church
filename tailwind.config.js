/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#583030",
        bgLight: "#f5f5ed",
        textDark: "#000000",
        textLight: "#ffffff",
        hoverBrand: "#6a3b3b",
        heroBg: "#fafaf6",
      },
      fontFamily: {
        serif: ["Agatho", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
