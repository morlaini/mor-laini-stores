/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#FFB3D9',
          50: '#FFE6F3',
          100: '#FFE6F3',
          200: '#FFB3D9',
          300: '#FF8FC4',
          400: '#FF6BAE',
          500: '#E64D8F',
        },
        champagne: {
          DEFAULT: '#E9D8B8',
          50: '#FBF8EF',
          100: '#F5EFDD',
          200: '#E9D8B8',
          300: '#DCC79A',
          400: '#C9B277',
          500: '#B59E5E',
        },
        ivory: '#FFFFFF',
        mauve: {
          DEFAULT: '#5C3348',
          light: '#7A4E58',
          dark: '#3D1F33',
        },
        charcoal: '#3A2F31',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
