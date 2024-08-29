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
        'testimonial':'#DFF1F9'
      },
      fontFamily:{
        'poppins':"Poppins"
      }
    },
  },
  plugins: [],
}