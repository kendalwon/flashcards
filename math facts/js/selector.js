const intro = document.querySelector('.intro');
const introContainer = document.getElementById('intro-card-container');
const instructions = document.getElementById('instructions');
const transition = document.getElementById('transition');
const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const problem = document.getElementById('problem');
const answer = document.getElementById('answer');

const typeInfo = {
  addition: {
    introPhrase: "Okay. Let's practice adding!",
    transitionPhrase: "Sure!<br>Let's add.",
    numbers: [0,1,2,3,4,5,6,7,8,9,10],
    setProblem() {
      let index = Math.floor(Math.random() * 11);
      let index2 = Math.floor(Math.random() * 11);
      let a = this.numbers[index];
      let b = this.numbers[index2];
      let c = a + b;
      problem.innerHTML = `${a}+${b}=`;        answer.innerHTML = `${c}`;
    }
  }, 
  subtraction: {
    introPhrase: "All right! Let's try subtracting.",
    transitionPhrase: "Okay!<br>It's time for subtraction.",
    numbers: [0,1,2,3,4,5,6,7,8,9,10],
    setProblem() {
      let index = Math.floor(Math.random() * 10);
      let a = this.numbers[index];
      let newNumbers = this.numbers.slice(0, index);
      newNumbers.unshift(0);
      let index2 = Math.floor(Math.random() * newNumbers.length);
      let b = newNumbers[index2];
      let c = a - b;
      problem.innerHTML = `${a}-${b}=`;
      answer.innerHTML = `${c}`;
    }
  },
  multiplication: {
    introPhrase: "Sure! Let's multiply.",
    transitionPhrase: "Okay!<br>Let's try multiplication.",
    numbers: [0,1,2,3,4,5,6,7,8,9,10],
    setProblem() {
      let index = Math.floor(Math.random() * 11);
      let index2 = Math.floor(Math.random() * 11);
      let a = this.numbers[index];
      let b = this.numbers[index2];
      let c = a * b;
      problem.innerHTML = `${a}x${b}=`;        answer.innerHTML = `${c}`;
    }
  }, 
  division: {
    introPhrase: "Great! Let's do some division.",
    transitionPhrase: "Okay!<br>Now for some division.",
    numbers: [[20,5], [20,4], [20,2], [18,9], [18,6], [18,3], [18,2], [16,8], [16,4], [16,2], [15,5], [15,3], [14,7], [14,2], [12,6], [12,4], [12,3], [12,2], [10,5], [10,2], [9,3], [9,1], [8,4], [8,2], [8,1], [7,7], [6,3], [6,2], [6,1], [5,1], [4,2], [4,4], [3,1], [2,2], [2,1], [1,1]],
    setProblem() {
      let index = Math.floor(Math.random() * 36);
      let a = this.numbers[index][0];
      let b = this.numbers[index][1];
      let c = a / b;
      problem.innerHTML = `${a}÷${b}=`;
      answer.innerHTML = `${c}`;
    }
  }
}

const randomProblem = (type) => {
  const problemType = typeInfo[type];
  if (generatedCard.classList.contains('flipped')) {
    generatedCard.classList.remove('flipped');
    setTimeout(function(){problemType.setProblem()}, 500);
  } else {
    problemType.setProblem() ;
  }
}

const removeListeners = () => {
  left.removeEventListener('click', postProblem);
  right.removeEventListener('click', postProblem);
  document.removeEventListener('keydown', postProblem);
}

const loadProblem = (type) => {
  const problemType = typeInfo[type];
  if (introContainer.classList.contains('active')) {
    intro.innerHTML = problemType.introPhrase;
    delayedFlip();
    setTimeout(() => {
      introContainer.classList.remove('active');
      generatedContainer.classList.add('active');
      randomProblem(type);
      left.addEventListener('click', postProblem = () => {
        randomProblem(type);
      });
      right.addEventListener('click', postProblem = () => {
        randomProblem(type);
      });
      document.addEventListener('keydown', postProblem = e => {
        if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
          randomProblem(type);
        }
      });
      instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
  } else {
    problem.innerHTML = "";
    transition.innerHTML = problemType.transitionPhrase;
    setTimeout(() => {
      randomProblem(type);
      transition.innerHTML = "";
      removeListeners();
      left.addEventListener('click', postProblem = () => {
        randomProblem(type);
      });
      right.addEventListener('click', postProblem = () => {
        randomProblem(type);
      });
      document.addEventListener('keydown', postProblem = e => {
        if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
          randomProblem(type);
        }
      });
      instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
  }
}