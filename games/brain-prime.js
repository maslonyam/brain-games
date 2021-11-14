import appLogic from '../src/index.js';

const brainPrimeNumGenerator = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

const brainPrimeAnswer = (num) => {
  let correctAnswer = 'yes';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0 || num < 2) {
      correctAnswer = 'no';
    }
  }

  return correctAnswer;
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  appLogic(rules, brainPrimeNumGenerator, brainPrimeAnswer);
};

export default brainPrime;
