import React from 'react';
import './App.css';

import SearchBar from './searchBar/SearchBar'
import FilterableList from './filterableList/FilterableList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(data) {
    console.log(data)
    this.setState({
      books: data
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar updateList={this.updateList} />
        <FilterableList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
