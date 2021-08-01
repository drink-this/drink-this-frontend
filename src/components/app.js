import Cookies from 'js-cookie';
import React from 'react';
import LoggedInApp from './logged_in_app';
import LoggedOutApp from './logged_out_app';

export default class App extends React.Component {
  render() {
    // if Cookies.get then LoggedInApp else LoggedOutApp
    return Cookies.get('authToken') ? <LoggedInApp /> : <LoggedOutApp />;
  }
}

