import Cookies from "js-cookie";
import { GOOGLE_AUTH_SERVICE, AUTH_SERVICE } from "../constants";
import googleAuthStore from "./google_auth_store";

class AuthMall {
  constructor() {
    this.authServices = {};
    this.currentAuthService = null;
  }

  setServiceStore = (name) => {
    this.currentAuthService = this.authServices[name];
  }

  addServiceStore = (name, store) => {
    this.authServices[name] = store;
  }

  isUserNew = () => {
    let cookie_value = Cookies.get('type');
    return (cookie_value === 'true');
  }

  setIsUserNew = (isNew) => {
    Cookies.set('type', isNew, { expires: 1 });
  }

  setCurrentAuthService = (service_name) => {
    Cookies.set(AUTH_SERVICE, service_name, { expires: 1 });
  }
}
const authMall = new AuthMall();

// Add additional auth service stores below
authMall.addServiceStore(GOOGLE_AUTH_SERVICE, googleAuthStore);

// ----------------------------------

authMall.setServiceStore(Cookies.get(AUTH_SERVICE));

export default authMall;
