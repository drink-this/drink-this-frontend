import React from 'react';
import Star from './star.js'
const _ = require('lodash');

export default class Onboard extends React.Component {
  render() {
    const array = _.range(5)
    let image = 'https://via.placeholder.com/200'
    return(
      <div className="font-playfair">
        <h1 className="text-center mb-12 text-3xl">To give you the best recommendations, please rate these cocktails</h1>
        <div className="flex justify-center space-x-8">
          {array.map((i) => {
            return(
              <div className="text-center">
                <img src={image} alt="Cocktail image" />
                <p className="mt-4">Cocktail Name</p>
                <div className="flex mt-4 justify-center">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}