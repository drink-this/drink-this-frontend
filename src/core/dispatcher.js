import Actions from './app_actions.js';

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();


AppDispatcher.register((payload) => {
  Actions.call(payload);
  return true;
});

export default AppDispatcher;
