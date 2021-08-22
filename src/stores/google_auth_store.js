import { EventEmitter } from "events";
import Cookies from "js-cookie";
import { GOOGLE_TOKEN_NAME } from "../constants";

class GoogleAuthStore extends EventEmitter {
  isAuthed = () => {
    return Cookies.get(GOOGLE_TOKEN_NAME) !== undefined
  }

  isUserNew = () => {
    return Cookies.get('type');
  }

  setAuthed = (token) => {
    Cookies.set(GOOGLE_TOKEN_NAME, token, { expires: 1 });
  }

  setIsUserNew = (isNew) => {
    Cookies.set('type', isNew, { expires: 1 });
  }
}
const googleAuthStore = new GoogleAuthStore();
export default googleAuthStore;
