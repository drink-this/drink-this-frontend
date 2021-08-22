import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router from '../../core/router.js';
import { GET_ONBOARD_DRINKS, GOOGLE_TOKEN_NAME } from '../../constants.js';
import onboardStore from "../../stores/onboard_store";
import Cookies from "js-cookie";
import spinnerStore from "../../stores/spinner_store";

Actions.register(GET_ONBOARD_DRINKS, payload => {
  let params = {
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }
  Axios.get(Router.route(GET_ONBOARD_DRINKS), {
    // cancelToken: payload.cancelTokenSource.token,
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
    onboardStore.setCocktails(response.data.data);
    spinnerStore.deactiveLoadingSpinner();
    Actions.finish(payload);
  }).catch((error) => {
    onboardStore.setCocktails([]);
    Actions.finish(payload);
  });
});
