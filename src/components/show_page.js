import React from 'react'
import Stars from './stars.js'
import SocialLinks from './social_links.js'

const ShowPage = () => {
  let {name, thumbnail, recipe, instructions, rating} = {
    "name":"Vodka Fizz",
    "thumbnail":"https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg",
    "glass":"White wine glass",
    "recipe":["2 oz Vodka","2 oz Half-and-half","2 oz Limeade","Ice","Nutmeg"],
    "instructions":"Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
    "rating":4
  }

  instructions = instructions.split('. ')
  console.log(instructions);
  
  return (
    <section className="flex justify-evenly">
      <div>
        <p className="font-playfair italic text-3xl pb-3">You should have a...</p>
        <h1 className="font-playfair font-black text-6xl pb-2">{ name }</h1>
        <p className="font-montserrat italic">Rate me to get better recommendations</p>
        <div>
          <Stars cname="flex pb-8" value={rating} />
        </div>
        <div className="flex space-x-10">
          <div>
            <p className="font-montserrat font-bold uppercase">Ingredients</p>
            <ul>
              {recipe.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>
              })}
            </ul>
          </div>
          <div className="max-w-xs">
            <p className="font-montserrat font-bold uppercase">Directions</p>
            <ol className="list-decimal ml-4">
              {instructions.map((step, i) => {
                return <li key={i}>{step}</li>
              })}

            </ol>
          </div>
        </div>
      </div>
      <div className="flex justify-around">

        <div className="font-montserrat font-semibold">
          <div className="cocktail_image w-96 h-96 bg-cover" style={{backgroundImage: `url("${thumbnail}")`}}></div>
          <button className="uppercase border-2 border-black px-4 py-2 mt-4 w-full hover:bg-black hover:text-white transition">Find a different drink</button>
        </div>

        <SocialLinks cnames="mx-4 space-y-8"/>
      </div>
    </section>
  )
}

export default ShowPage