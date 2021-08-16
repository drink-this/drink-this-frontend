import * as Constants from '../constants.js';
import Router from '../core/router.js';

/**
 * Register the rest of your routes below. The following can be deleted or
 * used for future reference.
 */

Router.registerRoute(Constants.CONFIRM_LOG_IN, args => {
  return `/token_auth`;
});

Router.registerRoute(Constants.GET_COCKTAILS, args => {
  return '/api/v1/cocktails/search';
});