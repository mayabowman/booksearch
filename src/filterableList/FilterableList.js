import React from 'react';
import './FilterableList.css';
import ListItem from '../listItem/ListItem';

class FilterableList extends React.Component {
  
  render() {
    let tempBooks = this.props.books || []
    const books = tempBooks.map((book, i) => 
      <ListItem {...book} key={i} />
    )
    return (
      <div>
        {books}
      </div>
    );
  }
}

export default FilterableList;