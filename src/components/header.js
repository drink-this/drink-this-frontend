import React from "react";
import Logo from "./logo.js";
import Search from "./search.js";
import SignOutButton from "./sign_out_button.js";

const Header = () => {
  return(
    <div className="flex items-center justify-between mb-10">
      <Logo />
      <div className="flex">
        <Search />
        <SignOutButton />
      </div>
    </div>
  );
}

export default Header;