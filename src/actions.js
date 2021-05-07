export const setOperation = (operation) => {
  return {
    type: "operation/setOperation",
    payload: operation,
  };
};

export const addLevel = () => {
  return {
    type: "level/addLevel",
  };
};

export const addHit = () => {
  return {
    type: "hits/addHit",
  };
};

export const setMessage = (message) => {
  return {
    type: "message/setMessage",
    payload: message,
  };
};

export const resetGame = () => {
  return {
    type: "resetGame",
  };
};
