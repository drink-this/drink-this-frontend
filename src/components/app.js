import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Header from './header.js';
import Landing from './landing.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchResults} />
          <Route path="/onboard" component={Onboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}
