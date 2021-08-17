import React from 'react';
import StarterCocktails from './starter_cocktails.js';
import { GET_ONBOARD_DRINKS } from '../constants.js';
import AppDispatcher from '../core/dispatcher.js';
import onboardStore from '../stores/onboard_store.js';
import googleAuthStore from '../stores/google_auth_store.js';
import { useEffect, useState } from 'react';
import cocktailStore from '../stores/cocktail_store.js';
import { useHistory } from 'react-router-dom';

export default function Onboard(props) {
  const [cocktails, setCocktails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let history = useHistory();

  const setcocktails = () => {
    setCocktails(cocktailStore.cocktails);
    setIsLoaded(true);
  }

  useEffect(() => {
    onboardStore.on(GET_ONBOARD_DRINKS, setcocktails);
    if (googleAuthStore.isUserNew() === 'true') {
      AppDispatcher.dispatch({
        action: GET_ONBOARD_DRINKS,
        emitOn: [{
          store: onboardStore,
          ids: [GET_ONBOARD_DRINKS]
        }]
      });
    } else {
      history.replace('/dashboard');
    }

    return function cleanup() {
      onboardStore.removeListener(GET_ONBOARD_DRINKS, setcocktails);
    };
  });

  if (!isLoaded) {
    return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>
  } else {
    return (
    <div className="font-playfair">
      <h1 className="text-center mb-12 text-3xl">To give you the best recommendations, please rate these cocktails</h1>
      <StarterCocktails data={cocktails}/>
    </div>
    )
  }
}
