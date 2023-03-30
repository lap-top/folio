/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"],
        Syne: ["Syne"],
      },
      backgroundImage: {
        bg: "url('../../public/bg.png')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
