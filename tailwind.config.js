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
          50: "#ece8ff",
          100: "#c5bef8",
          200: "#9e92ee",
          300: "#7866e5",
          400: "#523bdd",
          500: "#3921c3",
          600: "#2b1a99",
          700: "#1e126e",
          800: "#120a44",
          900: "#06031c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
