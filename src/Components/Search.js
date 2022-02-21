import React from 'react';
import glass from '../assets/search-svgrepo-com.svg';

const Search = ({
  search,
  handleChange,
  handleQuery,
  toggleSearchBar,
  handleSearchBar,
}) => {
  return (
    <div className={`search-modal ${toggleSearchBar ? 'open' : ''}`}>
      <form onSubmit={handleQuery} className="search-form">
        <input
          type="text"
          className="search-bar"
          name="location"
          value={search}
          onChange={handleChange}
          placeholder="Search"
        />
        <button className="search-btn" type="submit" onClick={handleSearchBar}>
          <img src={glass} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
