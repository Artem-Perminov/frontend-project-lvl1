import {
  getRandomNumber,
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory,
  getRandomOperator,
  expressionResult,
} from '../index.js';

const brainCalc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  let countCorrectAnswers = 0;
  for (let i = 0; i < countOfRounds; i += 1) {
    const randomNum1 = getRandomNumber(100);
    const randomNum2 = getRandomNumber(100);
    const randomOperator = getRandomOperator(10);
    const result = expressionResult(randomNum1, randomNum2, randomOperator);
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
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
export default brainCalc;
