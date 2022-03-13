import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const parityChecking = (num) => num % 2 === 0;
const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = parityChecking(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const brainEven = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, gameDescription);
};

export default brainEven;
