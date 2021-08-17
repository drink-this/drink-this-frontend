import Cookies from "js-cookie";
import { GOOGLE_AUTH_SERVICE } from "../constants";
import googleAuthStore from "./google_auth_store";

class AuthMall {
  constructor() {
    this.authServices = {};
    this.currentAuthService = null;
  }
  setService = (name) => {
    this.currentAuthService = this.authServices[name];
  }
  addService = (name, store) => {
    this.authServices[name] = store;
  }
}
const authMall = new AuthMall();

authMall.addService(GOOGLE_AUTH_SERVICE, googleAuthStore);

let currentServiceName = Cookies.get('service');
authMall.setService(currentServiceName);

export default authMall;
