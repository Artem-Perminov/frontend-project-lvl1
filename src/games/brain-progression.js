import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (progStep, firstNum, progLength) => {
  const progression = [];
  let value = firstNum;
  for (let i = 0; i < progLength; i += 1) {
    progression.push(value + progStep);
    value = progression[progression.length - 1];
  }
  return progression;
};

const generateRound = () => {
  const progStep = getRandomNumber(1, 10);
  const firstNum = getRandomNumber(1, 100);
  const progLength = 10;
  const progression = getProgression(progStep, firstNum, progLength);
  const hiddenIndex = getRandomNumber(1, progLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  return engine(rounds, gameDescription);
};

export default brainProgression;
