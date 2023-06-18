/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#000000',
          darkest: '#0D062D',
          dark: '#F5F5F5',
          light: '#787486',
          lighter: '#625F6D',
          lightest: '#E0E0E0',
          white: '#ffffff',
        },
        yellow: {
          100: '#FBCB18',
          200: '#FFA500',
          300: '#DFA87433',
          400: '#FCD64AB2',
          500: '#D58D49',
        },
        blue: {
          100: '#5030E533',
          200: '#E4CCFD',
          300: '#5030E5'
        },
        gray: {
          100: '#DBDBDB',
          200: '#292D32',
          300: '#C4C4C4',
        },
        green: {
          100: '#83C29D33',
          200: '#8BC48A',
          300: '#68B266'
        },
        red: {
          100: '#D8727D1A',
          200: '#D8727D',
          300: '#F4D7DA',
          400: '#D25B68'
        }
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
}