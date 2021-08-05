import React from 'react';
import Stars from './stars.js'
import SocialLinks from './social_links.js'
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom'

export default class Cocktail extends React.Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.loc = React.createRef()
    this.state = {
      isLoaded: false,
      cocktail: this.props.cocktail,
      loc: ''
    }
  }

  updateQ = (e) => {
    this.setState({loc: this.loc.current.value})
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
            <Stars cname="flex pb-8" value={rating} cocktail_id={id}/>
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
          <form method="get" action={`/search/yelp?q=${name}&loc=${this.state.loc}`} >
            <input type="hidden" value={name} name="q"/>
            <input name="loc" onChange={this.updateQ} className="font-playfair italic mt-10 mb-2 border-b-2 border-black" type="text" placeholder="City / State / Zipcode" ref={this.loc}/>
            <button disabled={!this.state.loc} className="flex flex-col w-60 font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl disabled:opacity-50" type="submit">Find near you <span className="text-xs italic">Powered by Yelp</span></button>
          </form>
        </div>
        <div className="flex justify-around">
  
          <div className="font-montserrat font-semibold">
            <div className="cocktail_image w-96 h-96 bg-cover" style={{backgroundImage: `url("${thumbnail}")`}}></div>
            <button data-testid="next-button" className="uppercase border-2 border-black px-4 py-2 mt-4 w-full hover:bg-black hover:text-white transition">Find a different drink</button>
          </div>
  
          {/* <SocialLinks cnames="mx-4 space-y-8" /> */}
        </div>
      </section>
    )
  }
}