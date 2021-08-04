import React from 'react';
import Stars from './stars.js'

export default class Onboard extends React.Component {
  render() {
    let data = [
      {
        "name": "Cocktail 1",
        "image": 'http://via.placeholder.com/200/100'
      },
      {
        "name": "Cocktail 2",
        "image": 'http://via.placeholder.com/200/200'
      },
      {
        "name": "Cocktail 3",
        "image": 'http://via.placeholder.com/200/300'
      },
      {
        "name": "Cocktail 4",
        "image": 'http://via.placeholder.com/200/400'
      },
      {
        "name": "Cocktail 5",
        "image": 'http://via.placeholder.com/200/500'
      },
    ]
    return(
      <div className="font-playfair">
        <h1 className="text-center mb-12 text-3xl">Let us know what you love (or hate!) by rating these cocktails</h1>
        <div className="flex justify-center space-x-8">
        {data.map((cocktail) => {
          return (
            <div className="text-center" key={cocktail.name}>
              <img src={cocktail.image} alt="Cocktail" />
              <p className="mt-4">Cocktail Name</p>
              <Stars cname="stars flex mt-4 justify-center" name={cocktail.name}/>
            </div>
          )
        })}
        </div>
        <div className="flex justify-center">
          <a href="/recommendation" 
          className="flex justify-center uppercase border-2 border-black py-2 px-20 m-8 w-1/3 hover:text-white hover:bg-black transition"
          >Find me a drink!</a>
        </div>
      </div>
    )
  }
}

