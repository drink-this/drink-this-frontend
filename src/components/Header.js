import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return(
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex">
        <div clasName="">
          <Search />
        </div>
        <p className="font-playfair font-bold hover:underline mx-16">Log Out</p>
      </div>
      
    </div>
  )
}

export default Header;