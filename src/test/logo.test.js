import React from 'react';
import Logo from '../components/logo.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act } from "react-dom/test-utils";
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'


const history = createMemoryHistory({ initialEntries: ['/search?q=drink'] });

const renderWithRouter = comp => render(
  <Router history={history}>
    <Route component={comp} />
  </Router>, container
);

let container = null;
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
  act(() => {
    renderWithRouter(Logo);
  });
  expect(container.textContent).toBe("drink thisdrink thisdrink this");
});