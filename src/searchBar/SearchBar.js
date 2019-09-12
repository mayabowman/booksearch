import React from 'react';
import './SearchBar.css'
import SearchBox from '../searchBox/SearchBox';
import FilterOptions from '../filterOptions/FilterOptions';

// key: 

class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'all',
      bookType: null,
      error: null
    };
  }

  getBooks(params) {
    const apiKey = 'AIzaSyB2iYNqSEI-aPm4jOCT0Qx29nioMsr_gds '
    const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryItems}&key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          error: null
        })
        this.props.updateList(data.items)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  updateTerm(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  filterPrint(option) {
    this.setState({
      printType: option
    });
    this.submitSearch()
  }

  filterBook(option) {
    this.setState({
      bookType: option
    });
  }

  submitSearch() {
    const { bookType, searchTerm, printType } = this.state;
    const params = bookType ? {
        q : searchTerm,
        printType : printType,
        filter : bookType
      } : {
        q : searchTerm,
        printType : printType
      }
    this.getBooks(params)  
  }

  render() {
    return (
      <div className="SearchBar">
        <SearchBox 
          submitSearch={() => this.submitSearch()}
          updateTerm={term => this.updateTerm(term)}
        />
        {this.state.error}
        <FilterOptions 
          printType = {this.state.printType}
          filter = {this.state.filter}
          filterPrint = {(value) => this.filterPrint(value)}
          filterBook={(value) => this.filterBook(value)}
        />
        {this.state.error}
      </div>
    );
  }
}

export default SearchBar;