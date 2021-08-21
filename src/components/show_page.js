import React from 'react';
import Cocktail from './cocktail.js';
import { GET_A_COCKTAIL, GET_A_RECOMMENDATION } from '../constants.js';
import AppDispatcher from '../core/dispatcher.js';
import cocktailStore from '../stores/cocktail_store.js';
import googleAuthStore from '../stores/google_auth_store.js';
import authMall from '../stores/auth_mall.js';

export default class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: {}, 
      isLoaded: false, 
      tagline: ''
    };
    if (this.props.match) {
      this.id = this.props.match.params.id;
    }
  }

  showcocktail = () => {
    this.setState({cocktail: cocktailStore.cocktail, isLoaded: true, tagline: 'Have a...'});
  }

  showrecommendation = () => {
    this.setState({cocktail: cocktailStore.cocktail, isLoaded: true, tagline: 'You should have a...'});
  }

  checkIfUserIsNew = () => {
    if (authMall.isUserNew() === 'true') {
      authMall.setIsUserNew('false');
    }
  }

  componentDidMount() {
    cocktailStore.on(GET_A_COCKTAIL, this.showcocktail);
    cocktailStore.on(GET_A_RECOMMENDATION, this.showrecommendation);

    if (this.id !== undefined) {
      AppDispatcher.dispatch({
        action: GET_A_COCKTAIL,
        id: this.id,
        emitOn: [{
          store: cocktailStore,
          ids: [GET_A_COCKTAIL]
        }]
      });
    } else {
      this.checkIfUserIsNew();
      AppDispatcher.dispatch({
        action: GET_A_RECOMMENDATION,
        emitOn: [{
          store: cocktailStore,
          ids: [GET_A_RECOMMENDATION]
        }]
      });
    }
  }

  componentWillUnmount() {
    cocktailStore.removeListener(GET_A_COCKTAIL, this.showcocktail);
    cocktailStore.removeListener(GET_A_RECOMMENDATION, this.showrecommendation);
  }
  
  render () {
    if (!this.state.isLoaded) {
      return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>
    } else {
      return <Cocktail cocktail={this.state.cocktail} tagline={ this.state.tagline }/>
    }
  }
}
