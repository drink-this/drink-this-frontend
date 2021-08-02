import React from 'react';
const queryString = require('query-string');

export default class YelpSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: this.parseParams(props)}
  }

  parseParams = (props) => {
    const { location: { search } } = props;
    let parsed = queryString.parse(search);
    return parsed.q;
  }

  // componentDidMount() {}

  render() {
    let image = 'https://via.placeholder.com/200'
    return(
      <div className="font-playfair font-normal text-3xl text-center">
        <h2 className="mb-16">Search results for <span className="italic">'{this.state.query}'</span></h2>
        <div className="grid grid-cols-2 mx-28">
          {Array.from({length: 10}, (v, i) => {
            return (
              <div className="flex mb-8" key={i} id={i}>
                <img src={image} alt="" />
                <div className="text-left ml-8">
                  <p className="text-xs italic" href="#">Business Type</p>
                  <p className="font-bold my-2" href="#">Business Name {i}</p>
                  <p className="text-base" href="#">123 Business Way</p>
                  <p className="text-base" href="#">Business Town, NY 12345</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}