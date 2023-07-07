/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')


module.exports = {
  theme: {
    extend: {      
      screens: {
        'mobile': '480px',
        'wide' : '2150px',
        'xl-wide' : '2500px'
      },
      maxWidth: {
        'xxl' : '1440px',
        'desk' : '1646px',
        'wide-desk' : '1766px',
        'wide' : '2150px',
        'xl-wide' : '2500px'
      },
      backgroundImage : {
        "footer" : "linear-gradient(94.61deg, #0BC6E3 20.96%, #8600C5 86.91%)",
      },
      colors: {
        "accent" : {
          "DEFAULT": "#FFC80B",
          "darker" : "#e2ab29"
        },
        "primary" : "#BC2EFF",
        "secondary" : "#6830CC"
      },
      fontFamily : {
       /* "titles" : "Oswald, sans-serif",
        "content" : "Source Sans Pro, sans-serif"
        */
      },
      spacing: {
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh'
      }
    },
    container: {
      center: true,
      margin: '4rem'
    }
  },
  plugins: [
  ],
  content: [
    path.resolve(__dirname, '**/*.{js,vue}'),
    path.resolve(__dirname, '../shopify/**/*.liquid'),
    path.resolve(__dirname, '../pages/*.html')

  ]
}