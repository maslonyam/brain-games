import readlineSync from 'readline-sync';

const printWelcome = (str) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(str);
  return name;
};

export default printWelcome;
