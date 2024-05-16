/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "Primary-clr": "#FAFAFA",
      "Secondary-clr": "#F2F3F5",
      "Secondary-2-clr": "#F8F3F0",
      "Accent-clr": "#ff8f9c",
      "Dark-clr": "#212121",
      "Font-clr": "#212121",
      "Font-gray-clr": "#787878",
      "Font-gray-light-clr": "#868686",
      "Font-white-clr": "#f5f4ef",
      "Font-accent-clr": "#ff8f9c",
      "Black-clr": "#212121",
      "Gray-clr": "#9ca3af",
      "Gray-bg-clr": "#f3f4f6",
      "Orange-clr": "#fb923c",
      "Pink-clr": "#f87171",
      "Green-clr": "#29CC39",
      "Brown-clr": "#CB7227",
      "Blue-clr": "#3260FF",
      "Red-clr": "#E52D2D",
      "Error-bg-clr": "#fce7f3",
      "Error-clr": "#db2777",
    },
    extend: {
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
      },
      screens: {
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
        "max-602": { max: "602px" },
        "max-smish": { max: "480px" },
        "max-mini": { max: "425px" },
        "max-moremini": { max: "375px" },
      },
    },
  },
  plugins: [],
};
