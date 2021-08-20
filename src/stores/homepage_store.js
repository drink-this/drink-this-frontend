import { EventEmitter } from "events";

class HomepageStore extends EventEmitter {
  constructor() {
    super();
    this.info = [];
  }
  setInfo = (info) => {
    this.info = info;
  }
}
const homepageStore = new HomepageStore();
export default homepageStore;