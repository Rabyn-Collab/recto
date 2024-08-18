/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-grid': 'repeat(auto-fit, minmax(300px, 1fr))'
      }

    },


    // colors: {
    //   'primary': '#C5705D'
    // },


    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    }
  },
  plugins: [],
}

