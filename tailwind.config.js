/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          primary: '#795757',
          secondary: '#664343', // You can customize the brown color here
        },
        slate: {
          100: '#f1f5f9',
        },
        gray: {
          500: '#6b7280',
        },
      },
    },
  },
  plugins: [],
};
