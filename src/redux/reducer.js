export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART':
      const newItem = {bookID: payload, quantity: 1};
      state.push(newItem);
      return state;

    default:
      return state
  }
}
