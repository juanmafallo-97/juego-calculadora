export const generateRandomNumber = (range) => {
  const min = Math.min(...range);
  const max = Math.max(...range);
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomOperation = () => {
  const operationsArray = ['+', '-', '*', '/'];
  const operation =
    operationsArray[Math.floor(Math.random() * operationsArray.length)];
  return operation;
};

//Funcion que genera dos numeros y una operacion aleatoria y devuelve un objeto con estos datos
export const generateRandomResult = (range) => {
  let result;
  let operation = generateRandomOperation();
  const numA = generateRandomNumber(range);
  const numB = generateRandomNumber(range);

  switch (operation) {
    case '+':
      result = numA + numB;
      break;
    case '-':
      result = numA - numB;
      break;
    case '*':
      result = numA * numB;
      break;
    case '/': {
      if (numB === 0) {
        operation = '*';
        result = numA * numB;
      }
      //Si el divisor es cero, directamente devolvemos la multiplicacion
      else {
        result = (numA / numB).toFixed(2);
      }
      break;
    }
    default:
      return;
  }

  return {
    numA,
    numB,
    operation,
    result,
  };
};

export const isCorrectAnswer = (operationObject, answer) => {
  const result = Number(operationObject.result);
  const userAnswer = Number(answer);
  if (operationObject.operation === '/') {
    //Si es division tenemos que tener en cuenta que el resultado puede tener decimales
    if (Number.isInteger(result)) {
      if (parseInt(result) === parseInt(userAnswer)) return true;
      return false;
    } else {
      if (result === userAnswer) return true;
      return false;
    }
  } else {
    if (result === userAnswer) return true;
    return false;
  }
};
