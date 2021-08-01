import React from 'react';
import Landing from '../components/landing.js';
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
    render(<Landing />, container);
  });
  expect(container.textContent).toBe("What should I drink tonight?Maybe it’s an old classic or maybe it’s something completely brand new. Tell us what you’re into and we’ll suggest something for you.Login with Google");
});