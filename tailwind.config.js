/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'b': '#2166eb',
        'g': '#7db87e',
        'r': '#e55353',
        'text-black': '#111315',
      },
    },
  },
  plugins: [],
}