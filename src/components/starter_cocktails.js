import React from 'react';
import Stars from './stars.js';
import RecommendationButton from  './recommendation_button.js';

export default class StarterCocktails extends React.Component {
  disabledClasses = "flex justify-center uppercase border-2 text-gray-400 border-gray-400 py-2 px-20 m-8 w-1/3 hover:text-gray-500 hover:bg-white transition"
  enabledClasses = "flex justify-center uppercase border-2 text-white bg-black border-black py-2 px-20 m-8 w-1/3 hover:text-black hover:bg-white transition"
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      clicked: [],
      disabled: true
    }
  }

  handleClick = (e) => {
    var index = e.target.parentNode.parentNode.getAttribute('id')
    if (!this.state.clicked.includes(index)) {
      this.setState({clicked: [...this.state.clicked, index]})
      this.checkDisabled([...this.state.clicked, index])
    }
  }

  checkDisabled = (ary) => {
    if (ary.length >= 5) {
      this.setState({disabled: false})
    }
  }

  render() {
    let {data, clicked, disabled} = this.state;

    return (      
      <div>
        <div className="flex justify-center space-x-8">
          {data.map((cocktail,index) => {
            // if (cocktail.attributes.rating > 0 && !this.state.clicked.includes(index)) {
            //   this.setState({clicked: [...this.state.clicked, index]})
            // } 
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

        <div className="flex justify-center">
          <button disabled={disabled}
          className={disabled ? this.disabledClasses : this.enabledClasses}
          >Find me a drink!</button>
        </div> 

      </div>  
    ) 
  }
}
