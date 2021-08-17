import React from "react";
import Logo from "./logo.js";
import Search from "./search.js";
import GoogleSignOut from "./google_sign_out.js";

const Header = () => {
  return(
    <div className="flex items-center justify-between mb-10">
      <Logo />
      <div className="flex">
        <Search />
        <GoogleSignOut />
      </div>
    </div>
  );
}

export default Header;