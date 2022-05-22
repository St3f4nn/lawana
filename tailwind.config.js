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
        2.593871: '10.375484px',
        3.191371: '12.765484px',
        3.25: '13px',
        3.298871: '13.195484px',
        3.75: '15px',
        4.65: '18.6px',
        5.7075: '22.83px',
        5.9: '23.6px',
        6.0575: '24.23px',
        6.25: '25px',
        6.5: '26px',
        8.75: '35px',
        9.5: '38px',
        10.5: '42px',
        16.75: '67px'
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif"
      },
      colors: {
        '2b2922': '#2b2922',
        'bfaa40': '#bfaa40',
        'e7e6e4': '#e7e6e4',
        'aba9a1': '#aba9a1',
        'a08f36': '#a08f36',
        'f1f0ef': '#f1f0ef',
        '39372d': '#39372d'
      },
      borderRadius: {
        '10': '10px'
      },
      fontSize: {
        '49': '49px',
        '72': '72px'
      },
      lineHeight: {
        5.25: '21px',
        25: '100px',
      },
      maxWidth: {
        120.5: '482px',
        172: '688px'
      },
      width: {
        17.5: '70px',
        31: '124px'
      },
      height: {
        17.5: '70px',
        31: '124px',
        217: '868px'
      },
      borderWidth: {
        0.228629: '0.914516px',
        0.35: '1.4px'
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