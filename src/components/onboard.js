import React from 'react';
import Stars from './stars.js'

export default class Onboard extends React.Component {
  render() {
    let image = 'http://placekitten.com/200/200'
    return(
      <div className="font-playfair">
        <h1 className="text-center mb-12 text-3xl">To give you the best recommendations, please rate these cocktails</h1>
        <div className="flex justify-center space-x-8">
        {Array.from({length: 5 }, (v, i) => (
            <div className="text-center" key={i}>
              <img src={`${image}?${i}`} alt="Cocktail" />
              <p className="mt-4">Cocktail Name</p>
              <Stars cname="stars flex mt-4 justify-center"/>
          </div>
          ))}
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