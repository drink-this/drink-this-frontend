import Stars from './stars.js'
import SocialLinks from './social_links.js'
const ShowPage = () => {
  return (
    <section className="flex justify-evenly">
      <div>
        <p className="font-playfair italic text-3xl pb-3">You should have a...</p>
        <h1 className="font-playfair font-black text-6xl pb-2">Cocktial Name</h1>
        <p className="font-montserrat italic">Rate me to get better recommendations</p>
        <div>
          <Stars cname="flex pb-8"/>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="font-montserrat font-bold uppercase">Ingredients</p>
            <ul>
              {Array.from({ length: 4}, (v,i) => {
                return <li key={i}>Ingredient {i}</li>
              })}
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-bold uppercase">Directions</p>
            <ol className="list-decimal ml-4">
              {Array.from({ length: 4}, (v,i) => {
                return <li key={i}>Step {i}</li>
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex justify-around">

        <div className="font-montserrat font-semibold">
          <img src="https://via.placeholder.com/450" alt="" />
          <button className="uppercase border-2 border-black px-4 py-2 mt-4 w-full hover:bg-black hover:text-white transition">Find a different drink</button>
        </div>

        <SocialLinks cnames="mx-4 space-y-8"/>
      </div>
    </section>
  )
}

export default ShowPage