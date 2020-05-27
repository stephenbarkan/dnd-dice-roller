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
    screens: {
      'xs': '500px',
      'sm': '640px'
    },
    extend: {
      colors: {
        red: {
          '100': '#FFF1EB',
          '200': '#FFEDE4',
          '300': '#ffdfd2',
          '500': '#FC664F',
          '600': '#E8523B',
        }
      },

      borderRadius: {
        xl: '1rem',
      },

      boxShadow: {
        button: '1px 2px 4px rgba(var(--shadowColor), 0.15), 1px 1px 3px -2px rgba(0, 0, 0, 0.2), inset -2px -3px 11px rgba(var(--shadowColor), 0.15), inset 2px 4px 5px rgba(255, 255, 255, 0.5)',
        // buttonHover: 'inset 0 0 15px -3px rgba(var(--shadowColor), .5), inset 0 0 10px -5px rgba(0,0,0, .75), inset 0px 0px 20px -20px rgba(var(--shadowColor),.5)',
        buttonHover: 'inset 0px 0px 7px -1px rgba(0, 0, 0, .25), inset 4px 4px 7px rgba(255, 255, 255, .5), inset -14px -12px 16px rgba(var(--shadowColor), 0.05), inset 11px 11px 16px rgba(var(--shadowColor), 0.04)',
      },

      spacing: {
        full: '100%',
      },
      fontFamily: {
        'serif': ['LunchType24', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['LunchType24', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      }
    },

  },
  variants: {},
  plugins: [],
}