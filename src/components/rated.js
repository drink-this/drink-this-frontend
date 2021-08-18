import Stars from "./stars.js";
import { Link } from "react-router-dom"
import React from 'react';
import { GET_RATED_COCKTAILS } from '../constants';
import AppDispatcher from '../core/dispatcher';
import cocktailStore from '../stores/cocktail_store';

export default class Rated extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      isLoaded: false
    }
  }

  loadCocktails = () => {
    let cocktails = cocktailStore.cocktails;
    this.setState({
      cocktails: cocktails,
      isLoaded: true
    });
  }

  componentDidMount() {
    cocktailStore.on(GET_RATED_COCKTAILS, this.loadCocktails);

    AppDispatcher.dispatch({
      action: GET_RATED_COCKTAILS,
      emitOn: [{
        store: cocktailStore,
        ids: [GET_RATED_COCKTAILS]
      }]
    });
  }

  componentWillUnmount() {
    cocktailStore.removeListener(GET_RATED_COCKTAILS, this.loadCocktails);
  }

  render() {
    if (!this.state.isLoaded) {
      return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>;
    } else if(this.state.cocktails.attributes?.length === 0 && this.state.isLoaded){
      return <div className="font-playfair font-normal text-3xl text-center mx-56">
                <p>No rated cocktails</p>
                <Link className="underline" to={'/onboard'}>You can rate some drinks to get started here.</Link>
              </div>;
    } else {
      return(
        <div className="mx-40 font-playfair pb-40">
          <h1 className="text-3xl mb-4 text-center">Your rated cocktails</h1>
          <div className="grid grid-cols-5 gap-x-6 gap-y-10 place-items-center">
            {this.state.cocktails.attributes.map((item, index) => {
              return(
                <div className="flex flex-col items-center" key={index}>
                  <Link className="text-center" to={`/cocktails/${item.id}`}>
                    <img src={item.thumbnail} alt={item.name}/>
                    {item.name}
                  </Link>
                  <Stars value={item.stars} cname={'flex'}/>
                </div>
              )
            })}
          </div>
        </div>
      );
    }
    
  }
}
