/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-accent': '#FB832F',
        'dark-header': '#333333',
        'blue-accent': '#7FCFFD',
        'silver-accent': '#777777'
      },
    },
  },
  plugins: [],
}
