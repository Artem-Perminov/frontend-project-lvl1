import readlineSync from 'readline-sync';

const userNameRequest = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi my friend, ${userName}!`);
};

export {
    userNameRequest,
}