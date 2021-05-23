import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchedUser, setSearchedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearchedUser(e.target.search.value);
  }
  return (
    //<div className="search-container">
      //{console.log(searchedUser)}
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' placeholder='Search users' name='search'/>
        </label>
        <input type='submit' value='Submit' />
      </form>
    //</div>
  )
}

export default SearchBar;