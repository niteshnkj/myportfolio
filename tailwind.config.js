/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        caveat: ["Caveat", "cursive"],
        mulish: ["Mulish", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
