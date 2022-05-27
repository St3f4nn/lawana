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
        0.5775: '2.31px',
        0.5875: '2.35px',
        1.01: '4.04px',
        1.0175: '4.07px',
        1.1525: '4.61px',
        1.25: '5px',
        1.75: '7px',
        2.25: '9px',
        2.5: '10px',
        3.205: '12.82px',
        3.24: '12.96px',
        3.25: '13px',
        3.49: '13.96px',
        3.75: '15px',
        3.9325: '15.73px',
        3.94: '15.76px',
        4.25: '17px',
        4.5: '18px',
        4.75: '19px',
        5.5: '22px',
        6.1375: '24.55px',
        6.25: '25px',
        6.5: '26px',
        7.25: '29px',
        7.5: '30px',
        8.75: '35px',
        9.25: '37px',
        9.5: '38px',
        10.5: '42px',
        10.75: '43px',
        12.5: '50px',
        12.75: '51px',
        14.25: '57px',
        15: '60px',
        15.5: '62px',
        15.75: '63px',
        17.5: '70px',
        18: '72px',
        19.75: '79px',
        20.5: '82px',
        22.75: '91px',
        25: '100px',
        26.75: '107px',
        27: '108px',
        33.25: '133px',
        33.75: '135px',
        35.5: '142px',
        37.5: '150px',
        43: '172px',
        44.25: '177px',
        45: '180px',
        45.5: '182px',
        45.75: '183px',
        49.5: '198px',
        50: '200px',
        53: '212px',
        53.75: '215px',
        60: '240px',
        105: '420px',
        170: '680px'
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
        '444236': '#444236',
        'd8d8d4': '#d8d8d4',
        'd8d7d4': '#d8d7d4',
      },
      borderRadius: {
        '10': '10px'
      },
      fontSize: {
        '11': '11px',
        '13': '13px',
        '13.84': '13.84px',
        '22': '22px',
        '28': '28px',
        '49': '49px',
        '50': '50px',
        '72': '72px'
      },
      lineHeight: {
        3.3525: '13.41px',
        4.2175: '16.87px',
        4.2675: '17.07px',
        4.32: '17.28px',
        4.325: '17.3px',
        5.25: '21px',
        5.485: '21.94px',
        6.095: '24.38px',
        6.81: '27.24px',
        7.315: '29.26px',
        7.5: '30px',
        8.5325: '34.13px',
        10.97: '43.88px',
        16.25: '65px',
        25: '100px',
      },
      maxWidth: {
        47.52: '190.08px',
        47.75: '191px',
        54.25: '217px',
        71.25: '285px',
        71.5: '286px',
        74.5: '298px',
        77.75: '311px',
        88: '352px',
        100: '400px',
        120.5: '482px',
        128.25: '513px',
        172: '688px',
        360: '1440px'
      },
      width: {
        4.6125: '18.45px',
        8.4675: '33.87px',
        8.5: '34px',
        10.5: '42px',
        11.25: '45px',
        12.5: '50px',
        15: '60px',
        15.25: '61px',
        17.5: '70px',
        31: '124px',
        '40.17': '40.17%',
        '42.75': '42.75%',
        '50.63': '50.63%',
        '57.33': '57.33%'
      },
      height: {
        0.5: '2px',
        4.6125: '18.45px',
        8.4675: '33.87px',
        10.5: '42px',
        11.25: '45px',
        15: '60px',
        15.25: '61px',
        17.5: '70px',
        31: '124px',
        32.295: '129.18px',
        35.5: '142px',
        60: '240px',
        150: '600px',
        217: '868px'
      },
      borderWidth: {
        0.3: '1.2px',
        0.35: '1.4px'
      },
      flexBasis: {
        125: '500px'
      },
      backgroundImage: {
        'showcase': "url('../resources/images/02_showcase/showcase_1.jpg');",
        'about-1-side': "url('../resources/images/03_about_1/about_1_side.jpg');",
        'about-1-side-mobile': "url('../resources/images/03_about_1/about_1_side_mobile.jpg');",
        'about-1-main': " url('../resources/images/03_about_1/about_1_main.jpg');",
        'about-1-main-mobile': " url('../resources/images/03_about_1/about_1_main_mobile.jpg');",
        'about-2-main': "url('../resources/images/05_about_2/about_2_main.jpg')",
        'about-2-main-mobile': "url('../resources/images/05_about_2/about_2_main_mobile.jpg')",
        'about-2-side': "url('../resources/images/05_about_2/about_2_side.jpg');"
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