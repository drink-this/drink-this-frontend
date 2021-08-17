import React from 'react';
import { Link } from 'react-router-dom';
import { GET_COCKTAILS } from '../constants';
import AppDispatcher from '../core/dispatcher';
import cocktailStore from '../stores/cocktail_store';

export default class SearchResults extends React.Component {
  // source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    this.state = {
      query: cocktailStore.searchQuery,
      cocktails: [],
      isLoaded: false
    }
  }

  loadCocktails = () => {
    let cocktails = cocktailStore.cocktails;
    this.setState({
      cocktails: cocktails, 
      isLoaded: true,
      query: cocktailStore.searchQuery
    });
  }

  componentDidMount() {
    cocktailStore.on(GET_COCKTAILS, this.loadCocktails);

    AppDispatcher.dispatch({
      action: GET_COCKTAILS,
      query: cocktailStore.searchQuery,
      emitOn: [{
        store: cocktailStore,
        ids: [GET_COCKTAILS]
      }]
    });
  }

  componentWillUnmount() {
    cocktailStore.removeListener(GET_COCKTAILS, this.loadCocktails);
  }

  render() {
    if (this.state.cocktails.length != 0 && this.state.isLoaded) {
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
                  <Link className="text-base mt-4 hover:underline cursor-pointer" to={`/cocktails/${drink.id}`}>{name}</Link>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else if (this.state.cocktails.length == 0 && !this.state.isLoaded) {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Loading...</h1>
    } else {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Sorry no results for <span className="italic">'{this.state.query}'</span></h1>
    }
  }
}
