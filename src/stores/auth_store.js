import { EventEmitter } from "events";
import Cookies from "js-cookie";

class AuthStore extends EventEmitter {
  isAuthed = () => {
    return Cookies.get('authToken') !== undefined
  }

  isUserNew = () => {
    return Cookies.get('type');
  }

  isUserOfAge = () => {
    return Cookies.get('ageVerification') !== undefined
  }

  setAuthed = (token) => {
    Cookies.set('authToken', token, { expires: 1, path: '/' });
  }

  setUserOfAge = (token) => {
    Cookies.set('ageVerification', token, { expires: 365});
  }

  setIsUserNew = (isNew) => {
    Cookies.set('type', isNew, { expires: 1 });
  }
}
const authStore = new AuthStore();
export default authStore;
