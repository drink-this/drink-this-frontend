import React from 'react';
import Stars from './stars.js';
import RecommendationButton from  './recommendation_button.js';

export default class StarterCocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {
    let data = this.state.data;
    let clicked = [];

    return (      
      <div>
        <div className="flex justify-center space-x-8">
          {data.map((cocktail,index) => {
            if (cocktail.attributes.rating > 0) {
              clicked.push(index)
            } else {
              clicked.filter(i => i == index)
            }
            return (
              <div className="text-center" id={index} key={cocktail.name}>
                <img src={cocktail.attributes.thumbnail} alt="Cocktail" />
                <p className="mt-4">{cocktail.attributes.name}</p>
                <Stars cname="stars flex mt-4 justify-center" value={cocktail.attributes.rating} cocktail_id={cocktail.id}/>
              </div>
            )
          }
          )}
        </div>
        <RecommendationButton clicked={clicked.length}/>
      </div>  
    ) 
  }
}
