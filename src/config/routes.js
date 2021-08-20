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

Router.registerRoute(Constants.GET_A_COCKTAIL, args => {
  return `/api/v1/cocktails/${args.id}`;
});

Router.registerRoute(Constants.GET_A_RECOMMENDATION, args => {
  return '/api/v1/recommendation';
});

Router.registerRoute(Constants.GET_ONBOARD_DRINKS, args => {
  return '/api/v1/dashboard';
});

Router.registerRoute(Constants.GET_HOMEPAGE_INFO, args => {
  return '/api/v1/homepage';
});

Router.registerRoute(Constants.GET_RATED_COCKTAILS, args => {
  return '/api/v1/cocktails/rated';
});