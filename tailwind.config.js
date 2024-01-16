/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-color": "#fff",
        secondary: "#ffed4a",
        link: "#fff",
        "hover-link": "#f2f2f2",
        "font-color": "#5D5D63",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: "500",
      },
      letterSpacing: {
        normal: "0.04em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
