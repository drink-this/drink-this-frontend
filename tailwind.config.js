module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'playfair': ['PlayfairDisplay'],
      'montserrat': ['Montserrat']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('images/zoomed-drink-this-landing.jpg')"
      })
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
