/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "bungee":['Bungee Spice', 'cursive'],
        "goldman":['Goldman', 'sans-serif'],
      }
    },
  },
  plugins: [],
}