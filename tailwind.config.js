/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,mdx}',
    './src/components/**/*.{js,mdx}',
    './src/app/**/*.{js,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      cursive: ['var(--font-cursive)', 'cursive'],
      chalk: ['var(--font-chalk)', 'cursive'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      gray: colors.zinc,
      purple: colors.violet,
      red: colors.rose,
      blue: colors.blue,
      pink: colors.pink,
      emerald: colors.emerald,
      amber: colors.amber,
      green: {
        200: '#355e3b',
      },
      yellow: {
        100: '#fef9c3',
        200: '#Eedd82', //camp specific
        300: '#fde047',
        400: '#B8860b', //camp specific
        500: '#8B4513', //custom
        600: '#A77197', //custom
        700: '#5F1E6F', //custom
        800: '#92400e',
        900: '#78350f',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
