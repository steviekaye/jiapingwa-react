import React from 'react';
import { connect } from 'react-redux';

function Book({bookData, state, dispatch}) {
  return (
    <div className="book">
      <div>
        <img src={process.env.PUBLIC_URL + bookData.cover}></img>
      </div>
      <div className="book-info">
        <div className="book-title">{bookData.title} </div>
        <div className="book-year">{bookData.year} </div>
        <div>
          <span className="book-title-CN">{bookData.titleCN} </span>
          <span className="book-title-pinyin">({bookData.titlePinyin}) </span>
        </div>
        <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: bookData.id })}>Add to cart</button>
        <div className="book-price">Price: ${bookData.price}</div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => state;

// function mapDispatchToProps(dispatch) {
//   return {
//     addToCart: () => dispatch({type: 'ADD_TO_CART', payload: bookData.id })
//   }
// }

export default connect(state => state)(Book);
