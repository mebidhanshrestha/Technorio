/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bidhan':'#93c23a',
      },
      fontFamily:{
        'poppins':"Poppins"
      }
    },
  },
  plugins: [],
}