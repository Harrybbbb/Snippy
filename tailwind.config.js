/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'navbar': 'red',
      'white': 'white',
      'grey': 'grey',
      'purple': '#9c75ff',
      'lightblack': '#303030',
      'black': '#1a1a1a',
      'background': '#292929',
      'darkblack': '#000',
    },
    fontFamily: {
      display: [ "Bungee Outline" , "sans-serif"],
      basic: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}

