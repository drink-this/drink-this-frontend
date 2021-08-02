import React from 'react';
import Cocktail from '../components/cocktail.js';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';

const data = {
  id: "11007",
  type: "cocktail",
  attributes: {
    name: "Margarita",
    thumbnail: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    glass: "Cocktail glass",
    recipe: [
      "1 1/2 oz Tequila",
      "1/2 oz Triple sec",
      "1 oz Lime juice",
      "Salt"
    ],
    instructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    rating: 0
  }
}

it("renders", async () => {
  render(<Cocktail cocktail={data} tagline={'You should have a...'} />)
  const text = screen.getByText(/You should have a.../)
  expect(text).toBeInTheDocument()
  const ingredients = screen.getByText(/Ingredients/)
  expect(ingredients).toBeInTheDocument()
  const directions = screen.getByText(/Directions/)
  expect(directions).toBeInTheDocument()
});