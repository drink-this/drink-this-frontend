import React from 'react';
import Onboard from '../components/onboard.js';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act, waitFor } from "@testing-library/react";
import googleAuthStore from '../stores/google_auth_store.js';

jest.mock('../core/dispatcher');

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
  googleAuthStore.setIsUserNew('true');
  render(<Onboard />, container);
  await waitFor(() => {
    expect(container.textContent).toEqual(expect.stringMatching(/Loading.../g));
  })
  
});