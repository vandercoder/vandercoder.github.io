module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
purge: {
    enabled: true,
    content: [
      './build/**/*.js',
      './build/**/*.html',
    ],
  }
,
  theme: {
    extend: {
      fontFamily: {
        'ubuntu' : ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        '1vw' : '1vw',
        '1.2vw' : '1.2vw',
        '1.5vw' : '1.5vw',
        '2vw' : '2vw',
      },
      height: {
        '1/3': '33vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '1/2': '50vh',
        'video-full': '77vh',
      },
      minHeight: {
        'halfscreen': '50vh',
      },
      opacity: {
        '40': '0.4',
        '60': '0.6'
      },
    },
  },
  variants: {},
  plugins: [],
}
