let subNumbers = [1,2,3,4,5,6,7,8,9,10];
    
const problem = document.getElementById('problem');
const buttons = document.querySelectorAll('.button');
const buttonA = document.getElementById('a');
const buttonB = document.getElementById('b');
const buttonC = document.getElementById('c');
const buttonD = document.getElementById('d');
const buttonE = document.getElementById('e');
const currentScore = document.getElementById('current-score');

let answer = 0;

const setSubtraction = () => {
  let index = Math.floor(Math.random() * 10);
  let a = subNumbers[index];
  let newNumbers = subNumbers.slice(0, index);
  newNumbers.unshift(0);
  let index2 = Math.floor(Math.random() * newNumbers.length);
  let b = newNumbers[index2];
  answer = a - b;
  problem.innerHTML = `${a}-${b}=`;
}

const setButtons = () => {
  let choices = [];
  let buttonsArray = [];
  let a;
  let b;
  if (answer > 1) {
    a = answer - 2;
    b = answer + 2;
  } else {
    a = 0;
    b = 4;
  }
  while (a <= b) {
    choices.push(a);
    a++;
  }
  while (buttonsArray.length < 5) {
    let r = Math.floor(Math.random() * 5);
    if (buttonsArray.indexOf(choices[r]) === -1) {
      buttonsArray.push(choices[r]);
    }
  }
  buttonA.value = buttonsArray[0];
  buttonA.innerHTML = buttonsArray[0];    buttonB.value = buttonsArray[1];
  buttonB.innerHTML = buttonsArray[1];
  buttonC.value = buttonsArray[2];    
  buttonC.innerHTML = buttonsArray[2];
  buttonD.value = buttonsArray[3];
  buttonD.innerHTML = buttonsArray[3];
  buttonE.value = buttonsArray[4];
  buttonE.innerHTML = buttonsArray[4];
}

const randomSubtraction = () => {
  setSubtraction();
  setButtons();
}

let correct = 0;
let total = 0;
const checkAnswer = (e) => {
  if (e.target.value == answer) {
    correct++;
  } else {
    const audio = document.getElementById('wrong-sound');
      audio.pause();
      audio.currentTime = 0;
      audio.play();
  }
  total++;
  currentScore.innerHTML = "Your current score is: " + correct + "/" + total;
  randomSubtraction();
}

window.addEventListener('load', randomSubtraction);
buttons.forEach(button => {
  button.addEventListener('click', checkAnswer);
});
