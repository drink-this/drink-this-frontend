import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN } from '../../constants.js';
import authStore from "../../stores/auth_store";
import Cookies from 'js-cookie';

Actions.register(CONFIRM_LOG_IN, payload => {
  Cookies.set('authToken', payload.authToken, { expires: 1 });
  // Axios(Router.request('GET', CONFIRM_LOG_IN, {
  //   params: {
  //     auth_token: payload.authToken,
  //     email: payload.email
  //   }
  // }))
  // .then(checkStatus)
  // .then(response => {
    // console.log(response);
    // authStore.setIsUserNew(response.is_new);
    authStore.setIsUserNew(true); // set for now, remove later
    Actions.finish(payload);
  // });
});
