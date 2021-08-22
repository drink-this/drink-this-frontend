import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN, GOOGLE_AUTH_SERVICE } from '../../constants.js';
import googleAuthStore from "../../stores/google_auth_store";
import Cookies from "js-cookie";
import authMall from "../../stores/auth_mall";
import spinnerStore from "../../stores/spinner_store";

Actions.register(CONFIRM_LOG_IN, payload => {
  Axios.get(Router.route(CONFIRM_LOG_IN), {
    params: {
      auth_token: payload.authToken,
    }
  })
  .then(checkStatus)
  .then(response => {
    googleAuthStore.setAuthed(response.data.token);
    authMall.setIsUserNew(response.data.is_new);
    authMall.setCurrentAuthService(GOOGLE_AUTH_SERVICE);
    spinnerStore.deactiveLoadingSpinner();
    Actions.finish(payload)
  }).catch(handleError);
});
