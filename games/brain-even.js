import appLogic from '../src/index.js';

const brainEvenNumGenerator = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
}

const brainEvenAnswer = (num) => {
  let correctAnswer;
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else if (num % 2 !== 0) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  appLogic(rules, brainEvenNumGenerator, brainEvenAnswer);
};

export default brainEven;
