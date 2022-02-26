import readlineSync from 'readline-sync';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const parityChecking = (num) => num % 2 === 0;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi my friend, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countCorrectAnswers = 0;
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const randomNum = getRandomNumber(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parityChecking(randomNum) === true) {
      switch (userAnswer) {
        case 'yes':
          console.log('Correct!');
          countCorrectAnswers += 1;
          break;
        case 'Yes':
          console.log('Correct!');
          countCorrectAnswers += 1;
          break;
        default:
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
          return;
      }
    }
    if (parityChecking(randomNum) === false) {
      switch (userAnswer) {
        case 'no':
          console.log('Correct!');
          countCorrectAnswers += 1;
          break;
        case 'No':
          console.log('Correct!');
          countCorrectAnswers += 1;
          break;
        default:
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
          return;
      }
    }
    if (countCorrectAnswers === 3) {
      console.log(`Congratulations, ${userName}!\nYou have won!`);
      return;
    }
  }
};
export {
  brainEven
};
