import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { GET_COCKTAILS, GOOGLE_TOKEN_NAME } from '../../constants.js';
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
  .then(checkStatus)
  .then(response => {
    cocktailStore.setCocktails(response.data.data);
    console.log(response);
    Actions.finish(payload);
  }).catch(handleError);
});
