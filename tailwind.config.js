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
        1.25: '5px',
        1.75: '7px',
        2.25: '9px',
        2.593871: '10.375484px',
        3.191371: '12.765484px',
        3.205: '12.82px',
        3.24: '12.96px',
        3.25: '13px',
        3.49: '13.96px',
        3.298871: '13.195484px',
        3.75: '15px',
        3.9325: '15.73px',
        3.94: '15.76px',
        4.25: '17px',
        4.5: '18px',
        4.65: '18.6px',
        5.7075: '22.83px',
        5.9: '23.6px',
        6.0575: '24.23px',
        6.25: '25px',
        6.5: '26px',
        6.75: '27px',
        8.75: '35px',
        9.5: '38px',
        10.5: '42px',
        12.75: '51px',
        13.25: '53px',
        15: '60px',
        16.75: '67px',
        17.5: '70px',
        18: '72px',
        19.75: '79px',
        22.75: '91px',
        25: '100px',
        27.25: '109px',
        33.25: '133px',
        33.75: '135px',
        37.5: '150px',
        41.75: '167px',
        42.25: '169px',
        43: '172px',
        44.25: '177px',
        45: '180px',
        45.75: '183px',
        49.5: '198px',
        53.75: '215px'
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
        '39372d': '#39372d',
        'dddcd9': '#dddcd9',
        '333128': '#333128',
        '2e2c24': '#2e2c24',
        '444236': '#444236'
      },
      borderRadius: {
        '10': '10px'
      },
      fontSize: {
        '13': '13px',
        '22': '22px',
        '49': '49px',
        '50': '50px',
        '72': '72px'
      },
      lineHeight: {
        4.325: '17.3px',
        5.25: '21px',
        16.25: '65px',
        25: '100px',
      },
      maxWidth: {
        54.25: '217px',
        71.25: '285px',
        71.5: '286px',
        74.5: '298px',
        77.75: '311px',
        100: '400px',
        120.5: '482px',
        128.25: '513px',
        172: '688px'
      },
      width: {
        10.5: '42px',
        11.25: '45px',
        15: '60px',
        17.5: '70px',
        31: '124px'
      },
      height: {
        10.5: '42px',
        11.25: '45px',
        15: '60px',
        17.5: '70px',
        31: '124px',
        150: '600px',
        217: '868px'
      },
      borderWidth: {
        0.228629: '0.914516px',
        0.3: '1.2px',
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