const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      // colors: {
      //   white: colors.white,
      //   black: colors.black,
      //   gray: {
      //     100: '#f6f6f6',
      //     200: '#d6d6d6',
      //     300: '#c2c2c2',
      //     400: '#8d8d8d',
      //     500: '#383838',
      //     600: '#1d1c21',
      //     700: '#101010',
      //   },
      // },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '6rem',
          xl: '10rem',
        },
      },
      extend: {
        colors: {
          primary: {
            300: '#fee2d5',
            400: '#fbcfb7',
            500: '#f47026',
            600: '#ca5d20',
            700: '#783813',
          },
          // gray: {
          //   300: '#d6d6d6',
          //   400: '#c2c2c2',
          //   500: '#383838',
          //   600: '#1d1c21',
          //   700: '#101010',
          // },
        }
      },
    },
    plugins: [
      require('tailwindcss-container-bleed'),
    ],
}