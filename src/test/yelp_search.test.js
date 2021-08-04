import React from 'react';
import YelpSearch from '../components/yelp_search.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { getByTestId, screen, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory({ initialEntries: ['/search/yelp?q=drink'] })

let container = null;
// renders components with history so that we can use the url and query params
const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>, container
)

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

it("renders", () => {
  renderWithRouter(YelpSearch);
  expect(text).toBeInTheDocument();
  const query = screen.getByText(/'drink'/);
  expect(query).toBeInTheDocument();
})