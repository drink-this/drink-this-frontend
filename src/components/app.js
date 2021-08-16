import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProvideAuth, PrivateRoute } from './auth_provider';
import Landing from './landing.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import YelpSearch from './yelp_search.js';
import ShowPage from './show_page.js';
import Dashboard from './dashboard.js';

export default function App () {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/onboard">
            <Onboard />
          </PrivateRoute>
          <PrivateRoute path="/search/yelp">
            <YelpSearch />
          </PrivateRoute>
          <PrivateRoute path="/search">
            <SearchResults />
          </PrivateRoute>
          <PrivateRoute path="/recommendation">
            <ShowPage />
          </PrivateRoute>
          <PrivateRoute path="/search">
            <SearchResults />
          </PrivateRoute>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
