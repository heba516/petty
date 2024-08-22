/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#92E3A9',
        'orange' : '#FF8D4C',
      },
    },
  },
  plugins: [],
}

