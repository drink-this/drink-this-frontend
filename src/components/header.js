import React from "react";
import Logo from "./logo.js";
import Search from "./search.js";

const Header = () => {
  return(
    <div className="flex items-center justify-between mb-10">
      <Logo />
      <div className="flex">
        <div>
          <Search />
        </div>
        <p className="font-playfair font-bold hover:underline mx-16">Log Out</p>
      </div>
    </div>
  );
}

export default Header;