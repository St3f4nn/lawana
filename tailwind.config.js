module.exports = {
  content: [
    "./dist/*.html",
    "./dist/js/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        0.25: '1px',
        1.75: '7px',
        3.25: '13px',
        3.75: '15px',
        6.5: '26px',
        10.5: '42px'
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif"
      },
      colors: {
        '2b2922': '#2b2922',
        'bfaa40': '#bfaa40',
        'e7e6e4': '#e7e6e4',
        'aba9a1': '#aba9a1',
        'a08f36': '#a08f36'
      },
      borderRadius: {
        '10': '10px'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '670px'
          },
          '@screen md': {
            maxWidth: '798px'
          },
          '@screen lg': {
            maxWidth: '1054px'
          },
          '@screen xl': {
            maxWidth: '1230px'
          },
          '@screen 2xl': {
            maxWidth: '1230px'
          }
        }
      })
    }
  ],
}