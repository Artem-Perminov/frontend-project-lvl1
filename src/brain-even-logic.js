import {
  getRandomNumber,
  parityChecking,
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory
} from './index.js';

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countCorrectAnswers = 0;
  for (let i = 0; i < countOfRounds; i += 1) {
    const randomNum = getRandomNumber(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = answer();
    if (parityChecking(randomNum) === true) {
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
    if (parityChecking(randomNum) === false) {
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
  brainEven
};
