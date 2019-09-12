import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <img
          src={this.props.volumeInfo.imageLinks.thumbnail}
          alt='book cover'
        />
        <div className="book-info">
          <div className="the-info">
            <h3>{this.props.volumeInfo.title}</h3>
            <p>{this.props.volumeInfo.authors}</p>
            <p>{this.props.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItem;