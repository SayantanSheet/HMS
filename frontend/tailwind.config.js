/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primaryColor:"#0067FF",
      yellowColor:"#FEB60D",
      purpleColor:"#9771FF",
      irisBlueColor:"#01B5C5",
      headingColor:"#181A1E",
      textColor:"#4E545F",
    },
    boxShadowColor:{
      panelShadow:"rgba(17, 12, 46, 0.15) 0px 48ps 100px 0px;",
    }
  },
  plugins: [],
}

