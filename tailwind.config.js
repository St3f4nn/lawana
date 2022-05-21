module.exports = {
  content: [
    "./dist/*.html"
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
        3.75: '15px'
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif"
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