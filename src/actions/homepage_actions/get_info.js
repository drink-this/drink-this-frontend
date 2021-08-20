import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router from '../../core/router.js';
import { GET_HOMEPAGE_INFO, GOOGLE_TOKEN_NAME } from '../../constants.js';
import homepageStore from "../../stores/homepage_store";
import Cookies from "js-cookie";

Actions.register(GET_HOMEPAGE_INFO, payload => {
  let params = {
    auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
  }
  Axios.get(Router.route(GET_HOMEPAGE_INFO), {
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
    homepageStore.setInfo(response.data.data);
    Actions.finish(payload);
  }).catch((error) => {
    homepageStore.setInfo([]);
    Actions.finish(payload);
  });
});
