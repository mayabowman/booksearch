import React from 'react';
import './SearchBox.css';



class SearchBox extends React.Component {
  render() {
    return (
      <div className="SearchBox">
        <input
          placeholder="Search term"
          onChange={term => this.props.updateTerm(term)}
        />
        <button onClick={() => this.props.submitSearch()}>Search</button>
      </div>
    );
  }
}

export default SearchBox;
