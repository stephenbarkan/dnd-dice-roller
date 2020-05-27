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
      },
      'btn-active': {
        'bg': '#CDDFA8',
        'border': '#71955C',
        'text': '#4E5540',
      },
      roll: {
        'bg': '#EEA650',
        'border': '#C99565',
        'text': '#6A3607',
      },
      'roll-active': {
        'bg': '#EFD6A1',
        'border': '#BF9C7C',
        'text': '#A0500A',
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

      boxShadow: {
        lcd: '1px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.25), inset -2px -3px 11px rgba(0, 0, 0, 0.75), inset 2px 4px 5px rgba(255, 255, 255, 0.4)',
        btn: '1px 2px 4px rgba(58, 52, 49, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.17), inset -2px -3px 11px rgba(58, 52, 49, 0.15), inset 2px 4px 5px rgba(255, 255, 255, 0.8)',
        'btn-active': 'inset -6px -6px 10px rgba(255, 255, 255, 0.8), inset 3px 3px 18px rgba(138, 145, 108, 0.8)',
        roll: '1px 2px 4px rgba(58, 52, 49, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.17), inset -2px -3px 11px rgba(58, 52, 49, 0.15), inset 2px 4px 5px rgba(255, 255, 255, 0.8)',
        'roll-active': 'inset -6px -6px 10px #FFFFFF, inset 3px 3px 18px #D6882B'
      },

      spacing: {
        full: '100%',
      },
      fontFamily: {
        'serif': ['GangsterGrotesk-Bold', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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