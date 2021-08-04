import React from 'react';
import SearchResults from './search_results';
import { useHistory } from "react-router-dom";

const Search = () => {

  const handleSubmit = (e) => {
    console.log(e);
  }

  return (
    <div className="flex h-min items-center">
      <div className="pt-1 mr-2">
        <svg width="21" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9.5" cy="9.5" r="8" stroke="black" strokeWidth="3"/>
          <line x1="17.1" y1="14.7" x2="22.7" y2="18.9" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <form onSubmit={handleSubmit} action="/search">
        <input type="text" placeholder="Search" name="q" className="border-b-2 border-black w-80"/>
      </form>
    </div>
  );
}

export default Search;