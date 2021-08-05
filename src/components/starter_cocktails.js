import React from 'react';
import Stars from './stars.js';
import RecommendationButton from  './recommendation_button.js';

export default class StarterCocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      clicked: []
    }
  }

  removeUnrated(index) {
    this.setState({clicked: this.state.clicked.filter(i => i == index)})
  }

  handleClick = (e, clicked, rating, index) => {
    console.log(rating)
    // if (rating > 0) {
    //   // this.setState({clicked: [...clicked, index]})
    //   // clicked.push(index)
    // } else {
     
    //   // clicked.filter(i => i == index)
    // }
  }

  render() {
    let data = this.state.data;
    let clicked = this.state.clicked;

    return (      
      <div>
        <div className="flex justify-center space-x-8">
          {data.map((cocktail,index) => {
            return (
              <div className="text-center" id={index} key={cocktail.name}>
                <img src={cocktail.attributes.thumbnail} alt="Cocktail" />
                <p className="mt-4">{cocktail.attributes.name}</p>
                <div onClick={this.handleClick(clicked, cocktail.attributes.rating, index)}>
                  <Stars cname="stars flex mt-4 justify-center" value={cocktail.attributes.rating} cocktail_id={cocktail.id}/>
                </div>
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
