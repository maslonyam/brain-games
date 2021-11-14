import appLogic from '../src/index.js';

const brainCalcExpGenerator = () => {
  let exp = '';
  const signs = ['+', '-', '*'];

  const index = Math.floor(Math.random() * 3);
  const sign = signs[index];

  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  exp = `${number1} ${sign} ${number2}`;
  return exp;
};

const brainCalcAnswer = (exp) => {
  const arr = exp.split(' ');
  let correctAnswer;
  if (arr[1] === '+') {
    correctAnswer = Number(arr[0]) + Number(arr[2]);
  } else if (arr[1] === '-') {
    correctAnswer = arr[0] - arr[2];
  } else if (arr[1] === '*') {
    correctAnswer = arr[0] * arr[2];
  }

  return String(correctAnswer);
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';

  appLogic(rules, brainCalcExpGenerator, brainCalcAnswer);
};

export default brainCalc;
