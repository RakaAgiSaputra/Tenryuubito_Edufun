/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      colors: {
        "custom-yellow": "#F1DB96",
        "custom-yellow-100": "#FCFDF3", // Adding custom color
      },
      fontSize: {},
    },
  },
  plugins: [],
};
