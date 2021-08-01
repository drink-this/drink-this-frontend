module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'playfair': ['PlayfairDisplay']
    },
    extend: {},
  },
  variants: {
    extend: {
      fill: ['hover'],
    },
  },
  plugins: [],
}
