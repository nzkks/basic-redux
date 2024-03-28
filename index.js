const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
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
console.log('initial state', store.getState());

// Redux store register listeners via subscribe(listener)
const unsubscibe = store.subscribe(() => {});

// Redux store allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// Redux store handles unregistering of listeners via the function returned by subscribe(listener)
unsubscibe();
