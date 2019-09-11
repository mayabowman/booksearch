import React from 'react';
import SearchBox from './searchBox/SearchBox';
import FilterOptions from './filterOptions/FilterOptions';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <SearchBox />
        <FilterOptions />
      </div>
    )
  }
}

export default SearchBar;