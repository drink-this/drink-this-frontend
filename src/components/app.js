import Cookies from 'js-cookie';
import React from 'react';
import Header from './header.js';
import Landing from './landing.js';
import Onboard from './onboard.js';
import Search from './search.js';
import SearchResults from "./search_results.js";

export default class App extends React.Component {
  render() {
    // if Cookies.get then LoggedInApp else LoggedOutApp
    return Cookies.get('authToken') ? <LoggedInApp /> : <LoggedOutApp />;
  }
}

