import React from 'react';
import Stars from './stars.js'
import SocialLinks from './social_links.js'

export default class Cocktail extends React.Component {

  constructor(props) {
    super(props);
    // navigator.geolocation.getCurrentPosition((data) => {
    //   let {latitude, longitude} = data.coords
    //   console.log(latitude, longitude);
    //   console.log(data);
    // }, err => console.log(err))
    this.state = {
      isLoaded: false,
      cocktail: this.props.cocktail
    }
  }


  render() {
    let { cocktail: {id, attributes}} = this.state
    let { name, recipe, instructions, thumbnail, rating } = attributes
    instructions = instructions.split(/(?<=\.)/)
    return (
      <section className="flex justify-evenly">
        <div>
          <p className="font-playfair italic text-3xl pb-3">{this.props.tagline}</p>
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
          <button className="flex flex-col font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl mt-10">Find near you <span className="text-xs italic">Powered by Yelp</span></button>
          <input className="border-b-2 border-black" type="text" placeholder="zipcope" />
        </div>
        <div className="flex justify-around">
  
          <div className="font-montserrat font-semibold">
            <div className="cocktail_image w-96 h-96 bg-cover" style={{backgroundImage: `url("${thumbnail}")`}}></div>
            <button data-testid="next-button" className="uppercase border-2 border-black px-4 py-2 mt-4 w-full hover:bg-black hover:text-white transition">Find a different drink</button>
          </div>
  
          <SocialLinks cnames="mx-4 space-y-8" />
        </div>
      </section>
    )
  }
}