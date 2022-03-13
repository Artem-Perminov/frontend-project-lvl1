import { roundsCount, engine } from '../index.js';
import getRandomNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';
const getProgression = (progCoef) => {
  const progression = [];
  let firstRanNum = getRandomNumber(1, 100);
  const cycleLength = 10;
  for (let i = 0; i < cycleLength; i += 1) {
    progression.push(firstRanNum + progCoef);
    firstRanNum = progression[progression.length - 1];
  }
  const posHiddenElement = Math.floor(Math.random() * 10);
  progression[posHiddenElement] = '..';
  return progression.join(' ');
};
const getProgressionNum = (progr, progCoef) => {
  let result;
  const valuesArr = progr.split(' ');
  if (valuesArr.indexOf('..') === 0) {
    result = Number(valuesArr[1]) - progCoef;
  } else {
    result = Number(valuesArr[valuesArr.indexOf('..') - 1]) + progCoef;
  }
  return result;
};
const generateRound = () => {
  const progCoeff = getRandomNumber(1, 10);
  const question = getProgression(progCoeff);
  const correctAnswer = String(getProgressionNum(question, progCoeff));
  return [question, correctAnswer];
};
const brainProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, gameDescription);
};

export default brainProgression;
