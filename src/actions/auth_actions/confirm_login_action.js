import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN } from '../../constants.js';
import authStore from "../../stores/auth_store";
import Cookies from 'js-cookie';
import { Callbacks } from "jquery";
import axios from "axios";

Actions.register(CONFIRM_LOG_IN, payload => {
  Cookies.set('authToken', payload.authToken, { expires: 1 });
  axios.get('/authorization', {
    params: {
      auth_token: payload.authToken,
      email: payload.email
    }
  })
  .then(checkStatus)
  .then(response => {
  console.log(response);
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
    window.location = "/onboard"
    Actions.finish(payload);
  });
});

