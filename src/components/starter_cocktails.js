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
    // let data = [
    //   {
    //     "id": "1",
    //     "name": "Cocktail 1",
    //     "image": 'http://via.placeholder.com/200/100',
    //     "rating": 5
    //   },
    //   {
    //     "id": "1",
    //     "name": "Cocktail 2",
    //     "image": 'http://via.placeholder.com/200/200',
    //     "rating": 3
    //   },
    //   {
    //     "id": "1",
    //     "name": "Cocktail 3",
    //     "image": 'http://via.placeholder.com/200/300',
    //     "rating": 2
    //   },
    //   {
    //     "id": "1",
    //     "name": "Cocktail 4",
    //     "image": 'http://via.placeholder.com/200/400',
    //     "rating": 3
    //   },
    //   {
    //     "id": "1",
    //     "name": "Cocktail 5",
    //     "image": 'http://via.placeholder.com/200/500',
    //     "rating": 4
    //   },
    // ];
    let data = this.state.data;
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
