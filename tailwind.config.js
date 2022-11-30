/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {},
    },
    backgroundImage: {
      "bbc-gradient-3":
        "linear-gradient(50deg, #33D2FF 5.73%, #3D68DE 54.65%, #9845E8 96.75%);",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px",
      },
      gridGutterWidth: "1.875rem",
    }),
  ],
};
