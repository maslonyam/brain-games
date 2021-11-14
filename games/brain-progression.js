import appLogic from '../src/index.js';

const getProgressionLength = () => {
  const length = Math.floor(Math.random() * 11 + 5);
  return length;
};

const generateProgression = () => {
  let initNum = Math.floor(Math.random() * 100 + 1);
  const step = Math.floor(Math.random() * 8 + 1);
  let length = getProgressionLength();
  const unknownNum = Math.floor(Math.random() * (length - 2) + 1);
  const arr = [];
  while (length > 0) {
    arr.push(initNum + step);
    initNum += step;
    length -= 1;
  }

  arr[unknownNum] = '..';
  return arr.join(' ');
};

const getAnswer = (exp) => {
  let correctAnswer;
  let step;
  const arr = exp.split(' ');
  const missedNum = arr.indexOf('..');

  if (missedNum === 1) {
    step = arr[3] - arr[2];
    correctAnswer = arr[missedNum + 1] - step;
  } else {
    step = arr[1] - arr[0];
    correctAnswer = arr[missedNum + 1] - step;
  }

  return String(correctAnswer);
};

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';

  appLogic(rules, generateProgression, getAnswer);
};

export default brainProgression;
