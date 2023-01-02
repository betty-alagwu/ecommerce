/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primaryBlue": "#0468DB",
        "light-grey": "#F1F2F3",
        "blackSecColor": "#43464E",
        "blackPrimary": "#1D1F22",
        "primaryGreen": "#5ECE7B",
        "primarygrey": "#72757E",
        "nude-dress-color": "#EDCBB9",
        "blue-dress-color": "#ABD9D8",
        "wine-dress-color": "#DB5593",
        "primaryRed": "#D12727",
        "sec-grey": "#8D8F9A",
      },
    },
  },
  plugins: [],
}
