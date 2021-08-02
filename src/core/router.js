import { SERVER_URL } from '../constants';
let axiosDefaults = require('axios/lib/defaults');
// const { REACT_APP_ROOT_URL } = process.env;

export function getCSRF() {
  try {
    return window.axios.defaults.headers.common['X-CSRF-TOKEN']
  } catch (error) {
    return null;
  }
}

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-CSRF-TOKEN': getCSRF()
};

class Router {
  constructor() {
    this._routes = new Map();
    try {
      axiosDefaults.baseURL = SERVER_URL;
    } catch(error) {
      // Do nothing
    }
  }

  registerRoute(name, route) {
    this._routes.set(name, route);
  }

  route(name, args = {}) {
    return `${axiosDefaults.baseURL}${this.partialRoute(name, args)}`;
  }

  partialRoute(name, args) {
    let registered_route = this._routes.get(name);
    if (registered_route instanceof Function) {
      return registered_route(args);
    }
    console.error(`The route ${name} was not registered or is not a function`);
  }

  relocateTo(url) {
    window.location.replace(url);
  }

  setUrl(url) {
    window.location.href = url;
  }

  request(type, routeName, requestData = {}, headers = HEADERS) {
    if (requestData.params == null) {
      requestData.params = {}
    }
    if (requestData.path_args == null) {
      requestData.path_args = {}
    }
    return {
      method: type,
      url: this.partialRoute(routeName, requestData.path_args),
      headers: headers,
      params: requestData.params
    }
  }
}

export function handleError(error) {
  console.error('HTTP request', error);
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 400) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}

export default new Router();
