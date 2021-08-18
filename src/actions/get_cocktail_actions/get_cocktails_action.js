import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { handleError } from '../../core/router.js';
import { GET_COCKTAILS, GET_RATED_COCKTAILS, GOOGLE_TOKEN_NAME } from '../../constants.js';
import cocktailStore from "../../stores/cocktail_store";
import Cookies from "js-cookie";

Actions.register(GET_COCKTAILS, payload => {
  let params = {
    search: payload.query,
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }
  Axios.get(Router.route(GET_COCKTAILS), {
    params: params
  })
  .then(response => {
    if (response.status >= 200 && response.status < 400) {
      return response;
    } else {
      var error = new Error(response);
      throw error;
    }
  })
  .then(response => {
    cocktailStore.setCocktails(response.data.data);
    Actions.finish(payload);
  }).catch((error) => {
    cocktailStore.setCocktails([]);
    Actions.finish(payload);
  });
});

Actions.register(GET_RATED_COCKTAILS, payload => {
  let params = {
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }
  Axios.get(Router.route(GET_RATED_COCKTAILS), {params: params})
  .then(response => {
    cocktailStore.setCocktails(response.data.data);
    Actions.finish(payload);
  })
  .catch(error => handleError(error));
})

