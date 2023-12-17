/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive'],
      'Roboto-font': ['Roboto', 'sans-serif'],
    },
    extend: {
      animation: {
        'scale-up': 'scale-up 0.5s linear forwards',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)', borderRadius: '0.75rem' },
          '50%': { transform: 'scale(1.05)', borderRadius: '1rem' },
          '100%': { transform: 'scale(1.1)', borderRadius: '1rem' },
        },
      },
    },
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  },
  plugins: [],
};
