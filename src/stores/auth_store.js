import { EventEmitter } from "events";
import Cookies from "js-cookie";

class AuthStore extends EventEmitter {
  isAuthed = () => {
    return Cookies.get('authToken') !== undefined
  }

  isUserNew = () => {
    return Cookies.get('type');
  }

  setAuthed = (token) => {
    Cookies.set('authToken', token, { expires: 1, path: '/' });
  }

  setIsUserNew = (isNew) => {
    Cookies.set('type', isNew, { expires: 1 });
  }
}
const authStore = new AuthStore();
export default authStore;