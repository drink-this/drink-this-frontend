import Actions from '../../core/app_actions.js';
import Axios from 'axios';
import ExampleStore from '../../stores/example_store.js';
import Router, { checkStatus, handleError } from '../../core/router.js';

import { GET_EXAMPLE_MESSAGE } from '../../constants.js';

Actions.register(GET_EXAMPLE_MESSAGE, payload => {
  // Axios(Router.request('GET', GET_EXAMPLE_MESSAGE, {
  //   path_args: {id: payload.id}
  // }))
  // .then(checkStatus)
  // .then(response => {
  //   ExampleStore.setExampleMessage(response.data.message);
  //   Actions.finish(payload);
  // }).catch(handleError);
});
