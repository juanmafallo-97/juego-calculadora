const initialState = {
  level: 1,
  operation: {},
  hits: 0,
  message: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gameReset':
      return initialState;

    case 'level/levelAdded':
      return {
        ...state,
        level: state.level + 1,
      };

    case 'operation/operationSet': {
      const newOperation = action.payload;
      return {
        ...state,
        operation: newOperation,
      };
    }

    case 'hits/hitAdded':
      return {
        ...state,
        hits: state.hits + 1,
      };

    case 'message/messageSet':
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
