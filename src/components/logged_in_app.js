import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Header from './header.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import ShowPage from './show_page.js';

export default class LoggedInApp extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchResults} />
          <Route path="/onboard" component={Onboard} />
          <Route path="/recommendation" component={ShowPage} />
          <Route path="/cocktails/:id" component={ShowPage} />
        </Switch>
      </Router>
    );
  }
}

