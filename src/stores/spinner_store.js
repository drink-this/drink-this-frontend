import { EventEmitter } from "events";

class SpinnerStore extends EventEmitter {
  constructor() {
    super();
    this.loadingSpinnerActive = false;
    this.color = "#FFFFFF";
  }

  setLoadingSpinnerAsActive = () => {
    this.loadingSpinnerActive = true;
    this.emit('loading');
  }

  deactiveLoadingSpinner = () => {
    this.loadingSpinnerActive = false;
    this.emit('loading');
  }

  setSpinnerColor = (color) => {
    this.color = color;
  }
}

const spinnerStore = new SpinnerStore();
export default spinnerStore;
