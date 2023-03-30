/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  content: [],
  theme: {
    colors:{
      'orange': '#FF4700',
      'green': '#OA4749',
      'purple': '#4311B9',
      'lightg': '#33C8CD',
      'lighp': '#CBBFE8',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
