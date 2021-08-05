import React from 'react';
import Onboard from '../components/onboard.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act, waitFor } from "@testing-library/react";

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

it("renders", async () => {
  render(<Onboard />, container);
  await waitFor(() => {
    expect(container.textContent).toEqual(expect.stringMatching(/Loading.../g));
  })
  
});