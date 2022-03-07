import {
  getRandomNumber,
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory,
  getGcd
} from './index.js';

const brainGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let countCorrectAnswers = 0;
  for (let i = 0; i < countOfRounds; i += 1) {
    const randomNum1 = getRandomNumber(100) + 10;
    const randomNum2 = getRandomNumber(100) + 10;
    const result = getGcd(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = answer();
    if (userAnswer.toString() === result.toString()) {
      countCorrectAnswers = rightAnswer(countCorrectAnswers);
    } else {
      wrongAnswer(userAnswer, userName, result);
      return;
    }
    if (countCorrectAnswers === conditionsForVictory()) {
      victory(userName);
      return;
    }
  }
};
export {
  brainGcd
};
