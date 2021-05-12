export const operationSet = (operation) => {
  return {
    type: 'operation/operationSet',
    payload: operation,
  };
};

export const levelAdded = () => {
  return {
    type: 'level/levelAdded',
  };
};

export const hitAdded = () => {
  return {
    type: 'hits/hitAdded',
  };
};

export const messageSet = (message) => {
  return {
    type: 'message/messageSet',
    payload: message,
  };
};

export const gameReset = () => {
  return {
    type: 'gameReset',
  };
};
