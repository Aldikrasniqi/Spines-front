// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      blue: '#0146B1',
      'dark-blue': '#0038F0F0',
      'light-blue': '#299DF2',
      green: '#00A79D',
      'dark-green': '#B3FE4A',
      'light-black' : '#131517',
      'dark-gray': '#24272D',
      gray: '##6E7175',
      purple: '#966AF5',
      white: '#FFFFFF',
      black: '#000000',
      'silver' : '#E4EEFC',
      'light-silver': '#F3F7FA',
    },
    fontFamily: {
      sans: [
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
