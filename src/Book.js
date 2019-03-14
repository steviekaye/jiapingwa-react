import React from 'react';
import { connect } from 'react-redux';
import { store } from './redux/store'

function Book({bookData, dispatch}) {
  // function Book({bookData, state, dispatch}) {
  // console.log('store', store);
  // console.log('store.getState()', store.getState());
  // console.log('state', state);
  console.log('dispatch', dispatch);
  console.log('store', store.getState())

  return (
    <div className="book">
      <div>
        <img src={process.env.PUBLIC_URL + bookData.cover} alt={bookData.title}></img>
      </div>
      <div className="book-info">
        <div className="book-title">{bookData.title} </div>
        <div className="book-year">{bookData.year} </div>
        <div>
          <span className="book-title-CN">{bookData.titleCN} </span>
          <span className="book-title-pinyin">({bookData.titlePinyin}) </span>
        </div>
        {}
        <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: bookData.id })}>Add to cart</button>
        <div className="book-price">Price: ${bookData.price}</div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('state', state);
  console.log('state2', store.getState());
  return state;
  }

export default connect(mapStateToProps())(Book);
