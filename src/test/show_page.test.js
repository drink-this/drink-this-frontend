import React from 'react';
import ShowPage from '../components/show_page.js';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
// import { render, unmountComponentAtNode  } from 'react-dom';
// import { act } from "react-dom/test-utils";

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

it("renders", async () => {
  render(<ShowPage />)
});