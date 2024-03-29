const { createStore } = require('redux');

const initialState = {
  name: 'NZKKS',
  address: {
    street: '123 Auckland Street',
    city: 'Auckland',
    Country: 'New Zealand'
  }
};

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = street => {
  return {
    type: STREET_UPDATED,
    payload: street
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload
        }
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state ', store.getState());
});
store.dispatch(updateStreet('246 Wellington Street'));

unsubscribe();
