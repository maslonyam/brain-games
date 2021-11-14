import printWelcome from './printWelcome.js';
import printQuestion from './printQuestion.js';
import getAnswer from './getAnswer.js';
import printAnswers from './printAnswers.js';
import finishGame from './finishGame.js';

const appLogic = (rules, generateQuestion, getCorrectAnswer) => {
  const name = printWelcome(rules);
  let acc = 0;
  do {
    const question = generateQuestion();
    printQuestion(question);
    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(question);
    if (answer === correctAnswer) {
      acc += 1;
      printAnswers(answer, name, correctAnswer);
    } else {
      acc = 0;
      printAnswers(answer, name, correctAnswer);
      break;
    }
  } while (acc < 3);

  if (acc === 3) {
    finishGame(name);
  }
};

export default appLogic;
