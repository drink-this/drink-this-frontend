import Actions from "../../core/app_actions";
import Axios from 'axios';
import Router, { checkStatus, handleError } from '../../core/router.js';
import { CONFIRM_LOG_IN } from '../../constants.js';

Actions.register(CONFIRM_LOG_IN, payload => {
  // Axios(Router.request('GET', CONFIRM_LOG_IN, {
  //   params: {
  //     auth_token: payload.authToken
  //   }
  // }))
  // .then(checkStatus)
  // .then(response => {
  //   console.log(response);
    localStorage.setItem('authToken', payload.authToken);
    Actions.finish(payload);
  // });
});
