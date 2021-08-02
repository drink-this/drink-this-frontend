import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN } from '../../constants.js';
import authStore from "../../stores/auth_store";

Actions.register(CONFIRM_LOG_IN, payload => {
  Axios(Router.request('GET', CONFIRM_LOG_IN, {
    params: {
      auth_token: payload.authToken
    }
  }))
  .then(checkStatus)
  .then(response => {
    authStore.setAuthed(response.data.authToken);
    authStore.setIsUserNew(response.data.is_new);
    Actions.finish(payload)
  }).catch(handleError);
    // authStore.setAuthed(payload.authToken);
    // authStore.setIsUserNew(true);
    // Actions.finish(payload);
});
