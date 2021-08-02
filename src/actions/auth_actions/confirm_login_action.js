import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN, SERVER_URL } from '../../constants.js';
import authStore from "../../stores/auth_store";
import Cookies from 'js-cookie';
import { Callbacks } from "jquery";
import axios from "axios";

const validateTokenWithServer = (authToken, email) => {
  return axios.get(`${SERVER_URL}/token_auth`, {
    params: {
      auth_token: authToken,
      email: email
    }
  })
  .then(checkStatus)
  .then(response => {
    return {
      token: response.data.token,
      isNew: response.data.is_new,
    };
  });
};

const setToken  = (auth) => {
  if(auth.token) {
    Cookies.set('authToken', auth.token);
  }
  return auth;
};

const redirectToLoggedInApp= (auth) => {
  // this should not happen
  if(!auth.token) {
    alert('There was an issue logging you in. Please try again.');
    return ;
  }
  if(auth.isNew) {
    window.location = '/onboard';
  } else {
    window.location = '/dashboard';
  }
};

Actions.register(CONFIRM_LOG_IN, payload => {
  validateTokenWithServer(payload.authToken, payload.email)
    .then(setToken)
    .then(redirectToLoggedInApp)
    // passing in an anonymous method to ensure the action finishes 
    .finally(() => Actions.finish(payload)) ;
})
