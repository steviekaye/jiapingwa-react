import React, {
  Component
}
from 'react';
import './App.css';
import {bookData} from './bookData.js'

var booksSorted = bookData.sort((a,b) => b.year - a.year);
//
// const Book = props => {
//
//
//   return (
//     <div classname="container">
//     <h3>{Bookdetails.title}</h3>
//     <div className="single-book">
//       <div className="book-info">
//
//          <img
//            src={bookDetails.cover}
//            alt={`Cover of ${bookDetails.title}`}
//            className="book-cover-image"
//          />
//
//        <div className="book-properties">
//          <p><span className="emphasis">Year</span> {bookDetails.year}</p>
//          <p>
//            <span className="emphasis">Original title (Mandarin)</span> <br />
//            {bookDetails.titleCN}
//          </p>
//          <p>
//            <span className="emphasis">Original title (Pinyin)</span> <br />
//            {bookDetails.titlePinyin}
//          </p>
//        </div>
//      </div>
//      </div>
//      </div>
//   )
// }
//
// export default Book;
