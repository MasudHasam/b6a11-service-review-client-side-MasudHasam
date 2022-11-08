/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b227d1",

          "secondary": "#04d855",

          "accent": "#ffa44f",

          "neutral": "#282F39",

          "base-100": "#E0E7F0",

          "info": "#9BB5F8",

          "success": "#32D272",

          "warning": "#FAD119",

          "error": "#EF5334",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
