import React, { Component } from 'react';

class Book extends Component {
  render() {
    const data = this.props.bookData;
    
    return (
      <div className="book">
        <div>
          <img src={process.env.PUBLIC_URL + data.cover}></img>
        </div>
        <div className="bookInfo">
          <div>
            <span className="booktitle">{data.title} </span>
            <span className="bookyear">({data.year}) </span>
          </div>
          <div>
            <span className="booktitleCN">{data.titleCN} </span>
            <span className="booktitlePinyin">({data.titlePinyin}) </span>
          </div>
          <div>
          <span className="bookPrice">Price: ${data.price}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;
