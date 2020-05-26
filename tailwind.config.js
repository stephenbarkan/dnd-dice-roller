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

      spacing: {
        full: '100%',
      },
      fontFamily: {
        'serif': ['Bluu Next', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Roboto Mono', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      }
    },

  },
  variants: {},
  plugins: [],
}