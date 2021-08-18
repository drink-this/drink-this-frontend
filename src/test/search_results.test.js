import React from 'react';
import SearchResults from '../components/search_results.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { Router, Route } from 'react-router'
import { createMemoryHistory } from 'history'
import { act, getTextBy, waitFor } from '@testing-library/react';
// jest.mock('../service/cocktail')
const history = createMemoryHistory({ initialEntries: ['/search?q=drink'] });
jest.mock('../core/dispatcher.js');
let container = null;
// renders components with history so that we can use the url and query params
const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>, container
);

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
// still need to mock out api call
it("renders", async () => {
  renderWithRouter(SearchResults);
  waitFor(() => getTextBy('.head-text', "Search results for 'drink'"));
});