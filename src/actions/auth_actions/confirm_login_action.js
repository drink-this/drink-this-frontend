import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN } from '../../constants.js';
import googleAuthStore from "../../stores/google_auth_store";

Actions.register(CONFIRM_LOG_IN, payload => {
  Axios.get(Router.route(CONFIRM_LOG_IN), {
    params: {
      auth_token: payload.authToken,
    }
  })
  .then(checkStatus)
  .then(response => {
    googleAuthStore.setAuthed(response.data.token);
    googleAuthStore.setIsUserNew(response.data.is_new);
    Actions.finish(payload)
  }).catch(handleError);
});
