import { EventEmitter } from "events";

class SpinnerStore extends EventEmitter {
  constructor() {
    super();
    this.color = "#FFFFFF";
  }

  setLoadingSpinnerAsActive = () => {
    this.emit('loading');
  }

  deactiveLoadingSpinner = () => {
    this.emit('not-loading');
  }

  setSpinnerColor = (color) => {
    this.color = color;
  }
}

const spinnerStore = new SpinnerStore();
export default spinnerStore;
