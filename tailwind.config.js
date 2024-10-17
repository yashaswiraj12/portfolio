const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "max-xs": "320px",
        xs: "370px",
        sm: "420px",
        md: "765px",
        lg: "1020px",
        xl: "1280px",
        "2xl": "1790px",
        "max-xl": "2560px",
      },
      fontSize: {
        xl: "16px",
        "1.5xl": "21px",
        "2.5xl": "29px",
      },
      gridTemplateRows: {
        "skill-rows": "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
