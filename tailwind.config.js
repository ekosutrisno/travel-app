module.exports = {
  // mode:'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: "#656690",
        base100: "#866ba0",
        baseOrange: "#fc9c42",
        basePurple: "#a65fec",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
