const initialState = {
  level: 0,
  result: 0,
  hits: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "resetGame":
      return initialState;

    case "level/addLevel":
      return {
        ...state,
        level: state.level + 1,
      };

    case "result/setResult": {
      const newResult = action.payload;
      return {
        ...state,
        result: newResult,
      };
    }

    case "hits/addHit":
      return {
        ...state,
        hits: state.hit + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
