import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Logo from './logo.js';
import Landing from './landing.js';
import Onboard from './onboard.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/onboard" component={Onboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}
