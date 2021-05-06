export const setResult = (number) => {
  return {
    type: "result/setResult",
    payload: number,
  };
};

export const addLevel = () => {
  return {
    type: "level/addLevel",
    payload: level,
  };
};

export const addHit = () => {
  return {
    type: "hits/addHit",
  };
};

export const resetGame = () => {
  return {
    type: "resetGame",
  };
};
