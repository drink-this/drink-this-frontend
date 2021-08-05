import React from 'react';

export default class RecommendationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.clicked
    }
  }

  render() {
    if (this.state.clicked == 5) {
      return (
      <div className="flex justify-center">
        <a href="/recommendation" 
        className="flex justify-center uppercase border-2 border-black py-2 px-20 m-8 w-1/3 hover:text-white hover:bg-black transition"
        >Find me a drink!</a>
      </div> 
      )
    } else {
      return (
        <div className="flex justify-center">
          <a href="/recommendation" 
          className="flex justify-center uppercase border-2 border-black py-2 px-20 m-8 w-1/3 hover:text-white hover:bg-pink transition"
          >Find me a drink!</a>
        </div> 
        )
    }  
  }
}
