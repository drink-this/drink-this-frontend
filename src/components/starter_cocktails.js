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

  // setClicked (cocktail_data) {
  //   cocktail_data.map((cocktail, index) => {
  //     if (cocktail.attributes.rating > 0) {
  //       index
  //     }
  //   })
  // }

  handleClick = (e) => {
    var index = e.target.parentNode.parentNode.getAttribute('id')
    if (!this.state.clicked.includes(index)) {
      this.setState({clicked: [...this.state.clicked, index]})
    }
  }

  render() {
    let data = this.state.data;

    return (      
      <div>
        <div className="flex justify-center space-x-8">
          {data.map((cocktail,index) => {
            if (cocktail.attributes.rating > 0 && !this.state.clicked.includes(index)) {
              this.setState({clicked: [...this.state.clicked, index]})
            } 
            return (
              <div className="text-center" id={index} key={cocktail.attributes.name}>
                <img src={cocktail.attributes.thumbnail} alt="Cocktail" />
                <p className="mt-4">{cocktail.attributes.name}</p>
                <div id={index} onClick={this.handleClick} key={cocktail.attributes.name}>
                  <Stars cname="stars flex mt-4 justify-center" value={cocktail.attributes.rating} cocktail_id={cocktail.id}/>
                </div>
              </div>
            )
          }
          )}
        </div>
        <RecommendationButton clicked={this.state.clicked}/>
      </div>  
    ) 
  }
}
