import { EventEmitter } from "events";
import Cookies from "js-cookie";

class AuthStore extends EventEmitter {
  constructor() {
    super();
    this._isUserNew = false;
  }

  isAuthed = () => {
    return Cookies.get('authToken') !== undefined
  }

  isUserNew = () => {
    return this._isUserNew;
  }

  setIsUserNew = (isNew) => {
    this._isUserNew = isNew;
  }
}
const authStore = new AuthStore();
export default authStore;