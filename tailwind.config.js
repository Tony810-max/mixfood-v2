/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive'],
    },
    extend: {},
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  },
  plugins: [],
};
