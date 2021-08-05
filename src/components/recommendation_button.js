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
        className="flex justify-center uppercase border-2 text-white bg-black border-black py-2 px-20 m-8 w-1/3 hover:text-black hover:bg-white transition"
        >Find me a drink!</a>
      </div> 
      )
    } else {
      return (
        <div className="flex justify-center">
          <button disabled={true}
          className="flex justify-center uppercase border-2 text-gray-400 border-gray-400 py-2 px-20 m-8 w-1/3 hover:text-gray-500 hover:bg-white transition"
          >Find me a drink!</button>
        </div> 
        )
    }  
  }
}
