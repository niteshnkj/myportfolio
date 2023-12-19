/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        caveat: ["Caveat", "cursive"],
        mulish:['Mulish', "sans-serif"],
      },
    },
  },
  plugins: [],
};
