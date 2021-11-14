import appLogic from '../src/index.js';

const brainGcdExpGenerator = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const exp = `${number1} ${number2}`;
  return exp;
};

const getGcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }

  return getGcd(n2, n1 % n2);
};

const brainGcdAnswer = (exp) => {
  const arr = exp.split(' ');
  const correctAnswer = getGcd(arr[0], arr[1]);

  return String(correctAnswer);
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  appLogic(rules, brainGcdExpGenerator, brainGcdAnswer);
};

export default brainGcd;
