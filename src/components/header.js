import Logo from "./logo.js";
import Search from "./search.js";
// comment
const Header = () => {
  return(
    <div className="flex items-center justify-between mb-10">
      <Logo />
      <div className="flex">
        <div>
          <Search />
        </div>
        <a className="font-playfair font-bold hover:underline ml-8" href="/about">About</a>
        <button className="font-playfair font-bold hover:underline mr-16 ml-8">Log Out</button>
      </div>
      
    </div>
  )
}

export default Header;