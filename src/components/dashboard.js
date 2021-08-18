import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="pb-20 text-center">
      <div className="my-8">
        <Link className={"border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition"} to={"/recommendation"}>Get a Cocktail Recommendation</Link>
      </div>

      <div id="discover" className="text-center font-playfair">
        <p className="text-3xl mb-4">
          Your top cocktails
          
        </p>
        <div className="flex justify-between mx-40 space-x-10 mb-10">
          {Array.from({length: 5}).map((item, index) => {
            return (
              <Link to={'/'} className={'space-y-4'}>
                <img src="https://via.placeholder.com/400" alt="" />
                <p>Cocktail Name</p>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="discover" className="text-center font-playfair">
        <p className="text-3xl mb-4">Discover something new</p>
        <div className="flex justify-between mx-40 space-x-10 mb-10">
          {Array.from({length: 5}).map((item, index) => {
            return (
              <Link to={'/'} className={'space-y-4'}>
                <img src="https://via.placeholder.com/400" alt="" />
                <p>Cocktail Name</p>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="glass" className="text-center font-playfair">
        <p className="text-3xl mb-4">Cocktails in a <span className="italic">'coup'</span> glass</p>
        <div className="flex justify-between mx-40 space-x-10 mb-10">
          {Array.from({length: 5}).map((item, index) => {
            return (
              <Link to={'/'} className={'space-y-4'}>
                <img src="https://via.placeholder.com/400" alt="" />
                <p>Cocktail Name</p>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="alcohol" className="text-center font-playfair">
        <p className="text-3xl mb-4">Cocktails with <span className="italic">'rum'</span></p>
        <div className="flex justify-between mx-40 space-x-10 mb-10">
          {Array.from({length: 5}).map((item, index) => {
            return (
              <Link to={'/'} className={'space-y-4'}>
                <img src="https://via.placeholder.com/400" alt="" />
                <p>Cocktail Name</p>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;