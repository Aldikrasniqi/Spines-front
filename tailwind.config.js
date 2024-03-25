// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/vue-tailwind-datepicker/**/*.js",],
  darkMode: true,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primary': '#2F6AD8',
      blue: '#0146B1',
      'dark-blue': '#0038F0F0',
      'light-blue': '#299DF2',
      'ex-light-blue': '#0062FF',
      green: '#00A79D',
      'dark-green': '#B3FE4A',
      gray: '#6E7175',
      'dark-gray': '#24272D',
      'light-gray': '#d3d3d3',
      purple: '#966AF5',
      white: '#FFFFFF',
      black: '#000000',
      'light-black': '#131517',
      silver: '#E4EEFC',
      'light-silver': '#F3F7FA',
      'field-error': '#FF0000',
      
    },
    fontFamily: {
      'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      serif: [
        'Merriweather',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ]
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
      lineHeight: {
        12: '3.2  rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
