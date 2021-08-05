import React from 'react';
import { getSearch } from '../service/cocktail.js';
const queryString = require('query-string');

export default class SearchResults extends React.Component {
  // source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    this.state = {
      query: this.parseParams(props),
      cocktails: [],
      isLoaded: false
    }
  }

  parseParams = (props) => {
    const { location: { search } } = props;
    let parsed = queryString.parse(search);
    return parsed.q;
  }

  async componentDidMount() {
    let cocktails = await getSearch(this.state.query)
    console.log(cocktails);
    this.setState({cocktails: cocktails, isLoaded: true})
  }

  render() {
    if (this.state.cocktails.length != 0 && this.state.isLoaded == true) {
    let cocktails = this.state.cocktails
      return(
        <div className="font-playfair font-normal text-3xl text-center mx-56">
          <h2 id="head-text" className="mb-16">Search results for <span className="italic">'{this.state.query}'</span></h2>
          <div className="grid grid-cols-5 gap-4 justify-items-stretch">
            {cocktails.map((drink) => {
              let image = drink.attributes.thumbnail
              let name = drink.attributes.name
              return (
                <div className="justify-self-center" key={drink.id} id={drink.id}>
                  <img src={image} alt="" />
                  <a className="text-base mt-4 hover:underline cursor-pointer" href={`/cocktails/${drink.id}`}>{name}</a>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else if (this.state.cocktails.length == 0 && this.state.isLoaded == false) {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Loading...</h1>
    } else {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Sorry no results for <span className="italic">'{this.state.query}'</span></h1>
    }
  }
}
