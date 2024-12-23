/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      colors: {
        customBlue1: 'rgb(1, 24, 54)', // Add the start color
        customBlue2: 'rgba(0, 37, 84, 0.8)', // Add the end color
        
      },
    },
  },
  plugins: [],
}