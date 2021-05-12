import { generateRandomResult } from './Game/gameFunctions';

export const preventRepeatedOperation = (storeAPI) => (next) => (action) => {
  if (action.type === 'operation/operationSet') {
    const currentState = storeAPI.getState();
    const currentOperation = currentState.operation;
    let newOperation = action.payload;

    console.log(currentOperation);
    console.log(newOperation);

    //Si la operacion que estaba antes es distinta a la nueva que salio, no hacemos nada. Seguimos con el dispatch
    if (JSON.stringify(currentOperation) !== JSON.stringify(newOperation)) {
      return next(action);
    } else {
      //Si no, buscamos una distinta para mandarla en vez que la otra
      const currentLevel = currentState.level;
      while (
        JSON.stringify(currentOperation) === JSON.stringify(newOperation)
      ) {
        newOperation = generateRandomResult(currentLevel);
      }

      storeAPI.dispatch({
        type: 'operation/operationSet',
        payload: newOperation,
      });
      return;
    }
  }

  return next(action);
};
