const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        brand: {
          50: "#e5e5ff",
          100: "#b4b5fe",
          200: "#8484fb",
          300: "#5352f8",
          400: "#2522f5",
          500: "#100adc",
          600: "#0907ab",
          700: "#04047b",
          800: "#01034c",
          900: "#00001e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
