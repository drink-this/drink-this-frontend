import { EventEmitter } from "events";

class AuthStore extends EventEmitter {
  constructor() {
    super();
    this._isUserNew = false;
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