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
        'hero-pattern': "url('images/zoomed-drink-this-landing.jpg')",
        'age-pattern': "url('images/bernard-hermant-1nDW7BjBj1s-unsplash.jpg')"
      }),
      dropShadow: {
        'c': '-5px 10px 10px #000000'
      },
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
