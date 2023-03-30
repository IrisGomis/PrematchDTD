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
      'orangel':'#FED2C0',
      'green': '#OA4749',
      'purple': '#4311B9',
      'lightg': '#33C8CD',
      'lighp': '#CBBFE8',
      'stone3': '#d6d3d1',
      'stone4': '#a8a29e',
      'stone5': '#78716c',
      'stone6': '#57534e',
      'stone7':'#44403c',
      'stone8':'#292524',
      'stone9': '#1c1917',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
