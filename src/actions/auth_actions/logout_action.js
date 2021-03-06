import Actions from "../../core/app_actions";
import { AUTH_SERVICE, GOOGLE_TOKEN_NAME, LOGOUT } from '../../constants.js';
import Cookies from "js-cookie";

Actions.register(LOGOUT, payload => {
  Cookies.remove(GOOGLE_TOKEN_NAME);
  Cookies.remove(AUTH_SERVICE);
  Actions.finish(payload)
});
