import React from 'react';
import ShowPage from '../components/show_page.js';
import { getByTestId, render, screen } from '@testing-library/react';
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

it("renders", () => {
  render(<ShowPage />)
  // console.log(screen)
  const text = screen.getByText(/You should have a.../)
  const ingredients = screen.getByText(/Ingredients/)
  const directions = screen.getByText(/Directions/)
  expect(text).toBeInTheDocument()
  expect(ingredients).toBeInTheDocument()
  expect(directions).toBeInTheDocument()
});

it("has button to get another drink rec", () => {
  render(<ShowPage />)
  const elem = screen.getByTestId('next-button')
  expect(elem).toBeInTheDocument('Find a different drink')
});