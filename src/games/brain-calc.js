import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'What is the result of the expression?';
const getRandomOperator = () => {
  const num = Math.floor(Math.random() * 10);
  if (num <= 3) {
    return '+';
  }
  if (num > 3 && num <= 6) {
    return '-';
  }
  if (num > 6) {
    return '*';
  }
  return true;
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
      break;
  }
  return true;
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
