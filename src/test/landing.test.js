import React from 'react';
import Landing from '../components/landing.js';
import { useAuth, useProvideAuth } from '../components/auth_provider';
import { render, unmountComponentAtNode  } from 'react-dom';
import { act } from "react-dom/test-utils";

jest.mock('../components/auth_provider');

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
  useAuth.mockImplementation(()=> {
    const userAuthed = () => false;
    const setUserAuthedState = (state) => true;
    return {userAuthed, setUserAuthedState};
  });
  act(() => {
    render(<Landing />, container);
  });
  expect(container.textContent).toBe("drink thisdrink thisdrink thisWhat should I drink tonight?Maybe it’s a classic or maybe it’s something new.Tell us what you’re into and we’ll suggest something for you.Login with Google");
});
