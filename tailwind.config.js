/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fcf8f7',
        primary: '#fce8e8',
        'primary-light': '#fff8f8',
        secondary: '#d8e2f3',
        'secondary-light': '#f0f4fa',
        accent: '#f7d7d7',
        'accent-light': '#fdf5f5',
        text: '#2c3e50',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
