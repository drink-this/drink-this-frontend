import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { GET_A_COCKTAIL, GOOGLE_TOKEN_NAME, GET_A_RECOMMENDATION } from '../../constants.js';
import cocktailStore from "../../stores/cocktail_store";
import Cookies from "js-cookie";

Actions.register(GET_A_COCKTAIL, payload => {
  console.log('get a cocktail');
  let params = {
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }

  Axios.get(Router.route(GET_A_COCKTAIL, {id: payload.id}), {
    params: params
  })
  .then(checkStatus)
  .then(response => {
    cocktailStore.setCocktail(response.data.data);
    Actions.finish(payload);
  }).catch(handleError);
});

Actions.register(GET_A_RECOMMENDATION, payload => {
  console.log('recommendation');
  let params = {
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }

  Axios.get(Router.route(GET_A_RECOMMENDATION), {
    params: params
  })
  .then(checkStatus)
  .then(response => {
    cocktailStore.setCocktail(response.data.data);
    Actions.finish(payload);
  }).catch(handleError);
});