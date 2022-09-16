/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'off-white': '#EEF2FB',
      'main-color': '#4E4E80',
      'faded-main': '#9494AC',
      'faded-main2': '#9C9CB4',
      'faded-main3': '##AAAAC4',
      'faded-main4': '#BCBCCD'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
