import { EventEmitter } from "events";
import Cookies from "js-cookie";

class AgeConfirmStore extends EventEmitter {
  isUserOfAge = () => {
    return Cookies.get('ageVerification') !== undefined
  }

  setUserOfAge = (token) => {
    Cookies.set('ageVerification', token, { expires: 365});
  }
}

const ageConfirmStore = new AgeConfirmStore();
export default ageConfirmStore;
