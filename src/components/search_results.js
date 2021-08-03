import React from 'react';
const queryString = require('query-string');

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: this.parseParams(props)}
  }

  parseParams = (props) => {
    const { location: { search } } = props;
    let parsed = queryString.parse(search);
    return parsed.q;
  }

  componentDidMount() {
    
  }

  render() {
    let image = 'https://via.placeholder.com/200'
    return(
      <div className="font-playfair font-normal text-3xl text-center mx-56">
        <h2 className="mb-16">Search results for {this.state.query}</h2>
        <div className="grid grid-cols-5 gap-4 justify-items-stretch">
          {Array.from({length: 20}, (v, i) => {
            return (
              <div className="justify-self-center" key={i} id={i}>
                <img src={image} alt="" />
                <button className="text-base mt-4 hover:underline cursor-pointer" href="#">Cocktail {i}</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}