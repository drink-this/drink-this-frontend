import Actions from "../../core/app_actions";
import { LOGOUT } from '../../constants.js';
import Cookies from "js-cookie";

Actions.register(LOGOUT, payload => {
  Cookies.remove('authToken');
  Actions.finish(payload)
});
