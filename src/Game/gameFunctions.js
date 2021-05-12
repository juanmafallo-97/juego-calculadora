export const generateRandomNumber = (range) => {
  const min = Math.min(...range);
  const max = Math.max(...range);
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomOperation = (level) => {
  let operationsArray;
  let operation;

  if (level === 1) operationsArray = ['+', '-'];
  if (level === 2 || level === 3) operationsArray = ['+', '-', '*'];
  if (level > 3) operationsArray = ['+', '-', '*', '/'];

  operation =
    operationsArray[Math.floor(Math.random() * operationsArray.length)];
  return operation;
};

//Funcion que genera dos numeros y una operacion aleatoria y devuelve un objeto con estos datos
export const generateRandomResult = (level) => {
  let result;
  let range;
  //Vamos a usar un rango para la suma y resta, y otro para la multiplicacion
  let multAndDivRange;
  let plusAndMinusRange;
  if (level <= 3) {
    multAndDivRange = [2, 5];
    plusAndMinusRange = [1, 8];
  } else {
    multAndDivRange = [level - 3, 2 + level];
    plusAndMinusRange = [level - 2, 5 + level];
  }

  let operation = generateRandomOperation(level);
  if (operation === '+' || operation === '-') range = plusAndMinusRange;
  else range = multAndDivRange;

  let numA = generateRandomNumber(range);
  let numB = generateRandomNumber(range);

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
      //Si el divisor es cero, directamente devolvemos la multiplicacion
      if (numB === 0) {
        operation = '*';
        result = numA * numB;
      }
      //Si la division no es entera buscamos un multiplo comun para que lo sea
      else if (numA % numB !== 0) {
        numA = numA * numB;
        result = numA / numB;
      } else {
        result = numA / numB;
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
