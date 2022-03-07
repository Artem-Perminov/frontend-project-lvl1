import {
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory, checkNumberPrime, getRandomNumber
} from './index.js';

const brainPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countCorrectAnswers = 0;
  for (let i = 0; i < countOfRounds; i += 1) {
    const number = getRandomNumber(100);
    const result = checkNumberPrime(number);
    console.log(`Question: ${number}`);
    const userAnswer = answer();
    if (result === true) {
      const correctAnswer = "'yes'";
      switch (userAnswer) {
        case 'yes':
          countCorrectAnswers = rightAnswer(countCorrectAnswers);
          break;
        case 'Yes':
          countCorrectAnswers = rightAnswer(countCorrectAnswers);
          break;
        default:
          wrongAnswer(userAnswer, userName, correctAnswer);
          return;
      }
    }
    if (result === false) {
      const correctAnswer = "'no'";
      switch (userAnswer) {
        case 'no':
          countCorrectAnswers = rightAnswer(countCorrectAnswers);
          break;
        case 'No':
          countCorrectAnswers = rightAnswer(countCorrectAnswers);
          break;
        default:
          wrongAnswer(userAnswer, userName, correctAnswer);
          return;
      }
    }
    if (countCorrectAnswers === conditionsForVictory()) {
      victory(userName);
      return;
    }
  }
};
export {
  brainPrime
};
