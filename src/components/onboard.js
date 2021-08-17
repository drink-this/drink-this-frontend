import React from 'react';
import StarterCocktails from './starter_cocktails.js';
import axios from 'axios';
import { GET_ONBOARD_DRINKS } from '../constants.js';
import AppDispatcher from '../core/dispatcher.js';
import onboardStore from '../stores/onboard_store.js';

export default class Onboard extends React.Component {
  source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      isLoaded: false
    }
  }

  setcocktails = () => {
    let cocktails = onboardStore.cocktails;
    this.setState({cocktails: cocktails, isLoaded: true});
  }

  componentDidMount() {
    onboardStore.on(GET_ONBOARD_DRINKS, this.setcocktails);
    AppDispatcher.dispatch({
      action: GET_ONBOARD_DRINKS,
      cancelTokenSource: this.source,
      emitOn: [{
        store: onboardStore,
        ids: [GET_ONBOARD_DRINKS]
      }]
    });
  }

  componentWillUnmount() {
    this.source.cancel('unmounting')
    onboardStore.removeListener(GET_ONBOARD_DRINKS, this.setcocktails);
  }

  render () {
    if (!this.state.isLoaded) {
      return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>
    } else {
      return (
      <div className="font-playfair">
        <h1 className="text-center mb-12 text-3xl">To give you the best recommendations, please rate these cocktails</h1>
        <StarterCocktails data={this.state.cocktails}/>
      </div>
      )
    }
  }
}
