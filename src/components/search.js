import React, { useState } from 'react';
import cocktailStore from '../stores/cocktail_store';
import { PERFORM_SEARCH } from '../constants';
import { useHistory } from 'react-router-dom';

export default function Search () {
  let [ searchQuery, setSearchQuery ] = useState('');
  let history = useHistory();

  const handleInputChanged = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      cocktailStore.setSearchQuery(searchQuery);
      history.replace('/search');
    }
  }

  return (
    <div className="flex h-min items-center">
      <div className="pt-1 mr-2">
        <svg width="21" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9.5" cy="9.5" r="8" stroke="black" strokeWidth="3"/>
          <line x1="17.1" y1="14.7" x2="22.7" y2="18.9" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <input type="text" placeholder="Search" className="border-b-2 border-black w-80" 
              value={searchQuery} 
              onChange={handleInputChanged}
              onKeyDown={handleKeyDown}/>
      </div>
    </div>
  );
}
