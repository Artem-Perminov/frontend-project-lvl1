import readlineSync from 'readline-sync';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomOperator = (max) => {
  const num = Math.floor(Math.random() * max);
  if (num <= 3) {
    return '+';
  }
  if (num > 3 && num <= 6) {
    return '-';
  }
  if (num > 6) {
    return '*';
  }
};
const expressionResult = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
  }
};
const parityChecking = (num) => num % 2 === 0;
const countOfRounds = 3;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi my friend, ${userName}!`);
  return userName;
};
const answer = () => readlineSync.question('Your answer: ');
const wrongAnswer = (userAnswer, userName, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`);
};
const rightAnswer = (value) => {
  console.log('Correct!');
  return value + 1;
};
const conditionsForVictory = () => 3;
const victory = (uName) => {
  console.log(`Congratulations, ${uName}!\nYou have won!`);
};
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
const getProgression = (coeff) => {
  const progression = [];
  let firstRanNum = Math.floor(Math.random() * 100);
  const cycleLength = 10;
  for (let i = 0; i < cycleLength; i += 1) {
    progression.push(firstRanNum + coeff);
    firstRanNum = progression[progression.length - 1];
  }
  const posHiddenElement = Math.floor(Math.random() * 10);
  progression[posHiddenElement] = '..';
  return progression.join(' ');
};
const getProgressionNum = (progr, coeff) => {
  let result;
  const valuesArr = progr.split(' ');
  if (valuesArr.indexOf('..') === 0) {
    result = Number(valuesArr[1]) - coeff;
  } else {
    result = Number(valuesArr[valuesArr.indexOf('..') - 1]) + coeff;
  }
  return result;
};
const checkNumberPrime = (num) => {
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomNumber,
  parityChecking,
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory,
  getRandomOperator,
  expressionResult,
  getGcd,
  getProgression,
  getProgressionNum,
  checkNumberPrime
};
