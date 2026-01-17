/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e7f3ff',
          100: '#dbeafe',
          500: '#1877F2', // Meta/Facebook Blue
          600: '#166fe5',
          700: '#0668E1',
        },
        secondary: '#42b72a', // Green accent
        background: '#F0F2F5', // Light grery background
        surface: '#FFFFFF', // White cards
        text: {
          primary: '#050505',
          secondary: '#65676B',
        }
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
