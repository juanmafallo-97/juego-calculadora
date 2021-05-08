const initialState = {
  level: 0,
  operation: {},
  hits: 0,
  message: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'resetGame':
      return initialState;

    case 'level/addLevel':
      return {
        ...state,
        level: state.level + 1,
      };

    case 'operation/setOperation': {
      const newOperation = action.payload;
      return {
        ...state,
        operation: newOperation,
      };
    }

    case 'hits/addHit':
      return {
        ...state,
        hits: state.hits + 1,
      };

    case 'message/setMessage':
      const message = action.payload;
      return {
        ...state,
        message,
      };

    default:
      return state;
  }
};

export default rootReducer;
