import React, { Component } from 'react';

class Book extends Component {
  render() {
    const data = this.props.bookData;

    return (
      <div className="book">
        <div>
          <img src={process.env.PUBLIC_URL + data.cover} alt={bookData.title}></img>
        </div>
        <div className="book-info">
          <div className="book-title">{data.title} </div>
          <div className="book-year">{data.year} </div>
          <div>
            <span className="book-title-CN">{data.titleCN} </span>
            <span className="book-title-pinyin">({data.titlePinyin}) </span>
          </div>
          <div className="book-price">Price: ${data.price}</div>
        </div>
      </div>
    )
  }
}

export default Book;
