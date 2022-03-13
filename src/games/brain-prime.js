import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkNumberPrime = (num) => {
  for (let i = 2; i < num - 1; i += 1) {
    if (num === 0) {
      return false;
    }
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = checkNumberPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainPrime = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, gameDescription);
};

export default brainPrime;
