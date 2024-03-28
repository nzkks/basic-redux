const BUY_CAKE = 'BUY_CAKE';

// action object. The pupose of below function is to return an action object.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  };
}

const initialState = {
  numOfCakes: 10
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

    default:
      return state;
  }
};
