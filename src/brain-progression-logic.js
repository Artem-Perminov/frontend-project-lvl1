import {
  countOfRounds,
  greeting,
  answer,
  wrongAnswer,
  rightAnswer,
  conditionsForVictory,
  victory,
  getProgression, getProgressionNum,
} from './index.js';

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  let countCorrectAnswers = 0;
  for (let i = 0; i < countOfRounds; i += 1) {
    const progCoeff = Math.floor(Math.random() * 10 + 1);
    const progression = getProgression(progCoeff);
    const result = getProgressionNum(progression, progCoeff);
    console.log(`Question: ${progression}`);
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
export default brainProgression;
