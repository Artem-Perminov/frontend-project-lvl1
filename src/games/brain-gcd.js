import engine, { roundCount } from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (n1, n2) => {
  const minValue = Math.min(...[n1, n2]);
  const maxValue = Math.max(...[n1, n2]);
  let result;
  for (let i = minValue; i > 0; i -= 1) {
    if (maxValue % i === 0 && minValue % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};
const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};
const brainGcd = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, gameDescription);
};

export default brainGcd;
