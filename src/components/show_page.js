import React from 'react';
import Cocktail from './cocktail.js';
import { GET_A_COCKTAIL, GET_A_RECOMMENDATION } from '../constants.js';
import AppDispatcher from '../core/dispatcher.js';
import cocktailStore from '../stores/cocktail_store.js';
import authMall from '../stores/auth_mall.js';
import spinnerStore from '../stores/spinner_store';

export default class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: new Map(),
      previous: new Map(),
      isLoaded: false, 
      tagline: ''
    };
    if (this.props.match) {
      this.id = this.props.match.params.id;
    }
  }

  showcocktail = () => {
    let previous = this.state.cocktail;
    this.setState({
      cocktail: cocktailStore.cocktail, 
      isLoaded: true, 
      tagline: 'Have a...',
      previous: previous
    });
  }

  showrecommendation = () => {
    let previous = this.state.cocktail;
    this.setState({
      cocktail: cocktailStore.cocktail, 
      isLoaded: true, 
      tagline: 'You should have a...',
      previous: previous
    });
  }

  checkIfUserIsNew = () => {
    if (authMall.isUserNew() === 'true') {
      authMall.setIsUserNew('false');
    }
  }

  componentDidMount() {
    spinnerStore.setLoadingSpinnerAsActive();
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
    if (this.state.isLoaded) {
      return <Cocktail cocktail={this.state.cocktail} tagline={ this.state.tagline } key={Math.random().toFixed(2)}/>;
    } else {
      return null;
    }
    // if (!this.state.isLoaded) {
    //   if (this.state.previous.size !== 0) {
    //     return <Cocktail cocktail={this.state.previous} tagline={ this.state.tagline }/>;
    //   } else {
    //     return null;
    //   }
    // } else {
    //   return <Cocktail cocktail={this.state.cocktail} tagline={ this.state.tagline }/>;
    // }
  }
}
