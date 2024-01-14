/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      'button-shadow': '0px 4px 15px 0px #F5BE32',
    },
    backgroundImage: {
      'gradient-radial':
        'radial-gradient(ellipse at center, rgba(30, 30, 30, 0.00) 41.67%, #1E1E1E 95.22%)',
      'gradient-linear-ver-1':
        'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 41.67%, #1E1E1E 95.22%)',
      'gradient-linear-ver-2':
        'linear-gradient(90deg, rgba(30, 30, 30, 0.00) 41.67%, #1E1E1E 95.22%)',
    },
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive'],
      'Roboto-font': ['Roboto', 'sans-serif'],
      'poppins-font': ['Poppins', 'sans-serif'],
      'great-vibes': ['Pinyon Script', 'cursive'],
      'cinzel-serif': ['Cinzel', 'serif'],
      'cormorant-serif': ['Cormorant', 'serif'],
      'DM-Serif-Display': ['DM Serif Display', 'serif'],
      'DM-Sans': ['DM Sans', 'sans-serif'],
    },
    extend: {
      animation: {
        'scale-up': 'scale-up 0.5s linear forwards',
        'border-b-from-left': 'border-b-from-left 0.5s ease-in-out forwards',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)', borderRadius: '0.75rem' },
          '50%': { transform: 'scale(1.05)', borderRadius: '1rem' },
          '100%': { transform: 'scale(1.1)', borderRadius: '1rem' },
        },
        'border-b-from-left': {
          '0%': { 'border-width': '0%' },
          '100%': { 'border-width': '100%' },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
