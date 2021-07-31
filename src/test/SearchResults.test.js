import React from 'react';
import SearchResults from '../components/search_results.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act } from "react-dom/test-utils";
import { Router, Route } from 'react-router'
import { createMemoryHistory } from 'history'
const history = createMemoryHistory({ initialEntries: ['/search?q=drink'] })

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
  renderWithRouter(SearchResults)
  expect(container.textContent).toEqual(expect.stringMatching(/Search results for/g));
});

it("grabs query param from url", () => {
  renderWithRouter(SearchResults)
  expect(container.textContent).toEqual(expect.stringMatching(/Search results for drink/g));
})