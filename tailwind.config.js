const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'fancy': ['"Monsieur La Doulaise"', 'sans-serif'],
        'serif': ['"Kaisei Decol"', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
