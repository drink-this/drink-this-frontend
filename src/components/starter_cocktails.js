import React from 'react';
import Stars from './stars.js';
import RecommendationButton from  './recommendation_button.js';

export default class StarterCocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    let data = [
      {
        "id": "1",
        "name": "Cocktail 1",
        "image": 'http://via.placeholder.com/200/100',
        "rating": 0
      },
      {
        "id": "1",
        "name": "Cocktail 2",
        "image": 'http://via.placeholder.com/200/200',
        "rating": 3
      },
      {
        "id": "1",
        "name": "Cocktail 3",
        "image": 'http://via.placeholder.com/200/300',
        "rating": 0
      },
      {
        "id": "1",
        "name": "Cocktail 4",
        "image": 'http://via.placeholder.com/200/400',
        "rating": 0
      },
      {
        "id": "1",
        "name": "Cocktail 5",
        "image": 'http://via.placeholder.com/200/500',
        "rating": 4
      },
    ];
    let clicked = [];

    return (
      <div>
        <div className="flex justify-center space-x-8">
          {data.map((cocktail,index) => {
            if (cocktail.rating > 0) {
              clicked.push(index)
            } else {
              clicked.filter(i => i == index)
            }
            return (
              <div className="text-center" id={index} key={cocktail.name}>
                <img src={cocktail.image} alt="Cocktail" />
                <p className="mt-4">Cocktail Name</p>
                <Stars cname="stars flex mt-4 justify-center" value={cocktail.rating} cocktail_id={cocktail.id}/>
              </div>
            )
          }
          )}
          <p>{clicked.length}</p>
        </div>
        <RecommendationButton clicked={clicked.length}/>
      </div>  
    ) 
  }
}
