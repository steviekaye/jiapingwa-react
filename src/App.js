import React, { Component } from 'react';
import './App.css';
import {bookData} from './bookData.js'
import Book from './Book.js'


class App extends Component {
  render() {
    const books = bookData.sort((a,b) => b.year - a.year);

    return (
      <div className="App">
        <div className="bookList">
          {books.map((book, i) => {
            return(<Book key={i} bookData={book}/>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
