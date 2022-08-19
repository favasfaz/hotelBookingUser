/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'zayn': "url('../public/zayn.jpeg')",
        'trip': "url('../public/trip.webp')",
      },
    },
    container: {
      padding: '10rem',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}