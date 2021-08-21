import { EventEmitter } from "events";

class OnboardStore extends EventEmitter {
  constructor() {
    super();
    this.cocktails = [];
  }
  setCocktails = (cocktails) => {
    this.cocktails = cocktails;
  }
}
const onboardStore = new OnboardStore();
export default onboardStore;
