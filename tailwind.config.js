module.exports = {
  purge: ['./site/**/*.njk'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '.75rem',
        sm: '1rem',
        lg: '2rem',
      }
    },
    colors: {
      'page-bg': '#FBFAF9',
      lcd: {
        'bg': '#393A31',
        'border': '#171717',
        'text': '#5EB32A',
      },
      btn: {
        'bg': '#E7E8E3',
        'border': '#AEB0A1',
        'text': '#616259',
        'hover-bg': '#E0E1DC',
        'active-bg': '#CDDFA8',
        'active-border': '#7B916E',
        'active-text': '#4E5540',
      },
      roll: {
        'bg': '#F69942',
        'border': '#C99565',
        'text': '#6A3607',
        'hover-bg': '#F9A658',
        'active-bg': '#EECC91',
        'active-border': '#C88A50',
        'active-text': '#B26A2B',
      },
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
        xl: '1rem',
      },

      // boxShadow: {
      //   lcd: '1px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.25), inset -2px -3px 11px rgba(0, 0, 0, 0.75), inset 2px 4px 5px rgba(255, 255, 255, 0.4)',
      //   btn: '1px 2px 4px rgba(58, 52, 49, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.17), inset -2px -3px 11px rgba(58, 52, 49, 0.15), inset 2px 4px 5px rgba(255, 255, 255, 0.8)',
      //   'btn-active': 'inset -6px -6px 10px rgba(255, 255, 255, 0.6), inset 0px 0px 14px rgba(106, 113, 78, 0.56), inset 2px 2px 24px rgba(138, 145, 108, 0.8)',
      //   roll: ' 1px 2px 4px rgba(58, 52, 49, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.17), inset -2px -3px 11px rgba(58, 52, 49, 0.24), inset 2px 4px 5px rgba(255, 255, 255, 0.68)',
      //   'roll-active': 'inset -6px -6px 10px rgba(255, 255, 255, 0.6), inset 0px 0px 14px rgba(189, 111, 17, 0.56), inset 2px 2px 24px rgba(214, 136, 43, 0.8)'
      // },
      boxShadow: {
        lcd: '',
        btn: '',
        'btn-active': '',
        roll: '',
        'roll-active': ''
      },

      spacing: {
        full: '100%',
      },
      fontFamily: {
        'sans': ['gangster-grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'mono': ['digital-numbers', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
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