/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "var(--primary-color)",
      'gray': 'var(--grey)',
      'blue': "var(--blue)",
      'red': '#EE4B49',
      'green': 'var(--green)',
      'white': '#ffff',
      'black': '#000000',
    },
    extend: {},
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [

  ],
}