const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// action creator object. The pupose of below function is to return an action object.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Chocolate cake!'
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Ice cream!'
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
};

// reducer function
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };

    default:
      return state;
  }
};

// Redux Store holds application state
const store = createStore(reducer);

// Redux store allows access to state via getState()
console.log('initial state', store.getState());

// Redux store register listeners via subscribe(listener)
const unsubscibe = store.subscribe(() => console.log('updated state', store.getState()));

// Redux store allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// Redux store handles unregistering of listeners via the function returned by subscribe(listener)
unsubscibe();
