const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// action creator object. The pupose of below function is to return an action object.
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty
  };
}

function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  };
}

const initialCakeState = {
  numOfCakes: 10
};

const initialIceCreamState = {
  numOfIceCreams: 20
};

// reducer function
// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

// Redux Store holds application state
const store = createStore(rootReducer, applyMiddleware(logger));

// Redux store allows access to state via getState()
console.log('initial state ', store.getState());

// Redux store register listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => {
  console.log('Update state ', store.getState());
});

// Redux store allows state to be updated via dispatch(action)
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(2));

// Redux store handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
