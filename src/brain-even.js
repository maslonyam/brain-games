import welcome from './welcome.js';
import getAnswer from './answer.js';
import question from './question.js';
import printCorrectAnwser from './correctAnswer.js';
import printWrongAnswer from './printWrongAnswer.js';
import finishGame from './finishGame.js';

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateNum = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

const checkAnswer = (number, answer) => {
  let correctAnwser;

  if (number % 2 === 0) {
    correctAnwser = 'yes';
  } else if (number % 2 !== 0) {
    correctAnwser = 'no';
  }

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    printCorrectAnwser();
    return true;
  }

  printWrongAnswer(answer, name, correctAnwser);
  return false;
};

const brainEven = () => {
  let acc = 0;
  do {
    const number = generateNum();
    question(number);
    const answer = getAnswer();
    if (checkAnswer(number, answer) === true) {
      acc += 1;
    } else {
      acc = 0;
      break;
    }
  } while (acc < 3);

  if (acc === 3) {
    finishGame(name);
  }
};

export default brainEven;
