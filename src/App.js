import React from 'react';
import './App.css';

import SearchBar from './searchBar/SearchBar'
import FilterableList from './filterableList/FilterableList'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <FilterableList />
    </div>
  );
}

export default App;
