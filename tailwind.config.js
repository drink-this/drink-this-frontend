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
        'age-pattern': "url('images/bernard-hermant-1nDW7BjBj1s-unsplash.jpg')",
        'blurry-bar': "url('images/blurry-bar.jpg')",
        'bottles': "url('images/bottles.jpg')"
      }),
      dropShadow: {
        'c': '-5px 10px 10px #000000'
      }
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
