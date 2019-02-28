import React, {
  Component
}
from 'react';
import './App.css';
import {bookData} from './bookData.js'

var books = bookData.sort((a,b) => b.year - a.year);

books = books.map((book) => { return (
<div className="book">
<span>
<img src={book.cover}></img>
</span>
<span>
<div>
<span className="booktitle">{book.title} </span>
<span className="bookyear">{book.year} </span>
</div>
<div>
<span className="booktitleCN">{book.titleCN} </span>
<span className="booktitlePinyin">{book.titlePinyin} </span>
</div>
</span>
</div>
)
}
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>{books} </div>
        </header>
      </div>
    );

    }
  }

  export default App;
