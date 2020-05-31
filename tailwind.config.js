module.exports = {
  purge: ['./site/**/*.njk'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '.75rem',
        sm: '1rem',
        lg: '1rem',
      }
    },
    colors: {
      'red-500': '#f06f5c',
    },

    transitionTimingFunction: {
      smooth: 'cubic-bezier(.2,.8,.2,1)',
      bouncy: 'cubic-bezier(0.24, 0, 0.31, 1.75)',
    },

    boxShadow: {
      lcd: '1px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.25), inset -2px -3px 11px rgba(0, 0, 0, 0.75), inset 2px 4px 5px rgba(255, 255, 255, 0.4)',
      btn: 'inset -3px -3px 6px rgba(180, 34, 11, 0.11), inset 3px 3px 3px rgba(255, 255, 255, 0.74), inset 0px -1px 0px rgba(252, 102, 79, 0.25)',
      'btn-side': '0px 2px 4px rgba(132, 18, 0, 0.15), 2px 0px 8px rgba(115, 15, 0, 0.15), inset -3px -3px 6px rgba(180, 34, 11, 0.11), inset 3px 3px 3px rgba(255, 255, 255, 0.43)',
      'btn-active': 'inset -3px -3px 6px rgba(180, 34, 11, 0.11), inset 3px 3px 3px rgba(255, 255, 255, 0.54), inset 0px -1px 0px rgba(252, 102, 79, 0.25)',
      roll: ' 1px 2px 4px rgba(58, 52, 49, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.17), inset -2px -3px 11px rgba(58, 52, 49, 0.24), inset 2px 4px 5px rgba(255, 255, 255, 0.68)',
      'roll-active': 'inset -6px -6px 10px rgba(255, 255, 255, 0.6), inset 0px 0px 14px rgba(189, 111, 17, 0.56), inset 2px 2px 24px rgba(214, 136, 43, 0.8)',
      'btn-indent': '-1px 2px 1px #FFFFFF, inset 0px 3px 4px rgba(200, 25, 25, 0.15)',
    },

    extend: {
      screens: {
        'xs': '500px',
        'sm': '640px'
      },
      opacity: {
        '10': '.10',
      },

      borderRadius: {
        xl: '1.5rem',
        '2xl': '1.75rem',
      },

      // boxShadow: {
      //   lcd: '',
      //   btn: '',
      //   'btn-active': '',
      //   roll: '',
      //   'roll-active': ''
      // },

      spacing: {
        full: '100%',
      },
      fontFamily: {
        'sans': ['sporting-grotesque', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      }
    },

  },
  variants: {
    boxShadow: ['active, hover, focus'],
    textColor: ['active, hover, focus'],
    backgroundColor: ['active, hover, focus'],
    borderColor: ['active, hover, focus'],
  },
  plugins: [],
}