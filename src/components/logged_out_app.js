import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Landing from './landing.js';

export default class LoggedOutApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

