import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const expressionResult = (operator, n1, n2) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      throw new Error('unsupported operator');
  }
};

const generateRound = () => {
  const n1 = getRandomNumber(1, 100);
  const n2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${n1} ${operator} ${n2}`;
  const correctAnswer = String(expressionResult(operator, n1, n2));
  return [question, correctAnswer];
};

const brainCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, gameDescription);
};

export default brainCalc;
