import React from 'react';
import LandingImage from '../components/landing_image.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act } from "react-dom/test-utils";

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
    render(<LandingImage />, container);
  });
});