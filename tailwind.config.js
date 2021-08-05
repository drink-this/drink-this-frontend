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
        'landing': "url('images/zoomed-drink-this-landing.jpg')",
        'blurry-bar': "url('images/blurry-bar.jpg')",
        'bottles': "url('images/bottles.jpg')"
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
