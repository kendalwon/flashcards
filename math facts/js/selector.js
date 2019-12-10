const intro = document.querySelector('.intro');
const introContainer = document.getElementById('intro-card-container');
const instructions = document.getElementById('instructions');
const transition = document.getElementById('transition');

function removeListeners() {
    left.removeEventListener('click', randomAddition);
    left.removeEventListener('click',randomSubtraction);
    left.removeEventListener('click',randomMultiplication);
    left.removeEventListener('click',randomDivision);
    right.removeEventListener('click', randomAddition);
    right.removeEventListener('click', randomSubtraction);
    right.removeEventListener('click', randomMultiplication);
    right.removeEventListener('click', randomDivision);
}

function loadAddition() {
    if (introContainer.classList.contains('active')) {
        intro.innerHTML = "Okay. Let's practice adding!";
        delayedFlip();
        setTimeout(function() {
            introContainer.classList.remove('active');
            generatedContainer.classList.add('active');
            randomAddition();
            left.addEventListener('click', randomAddition);
            right.addEventListener('click', randomAddition);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomAddition();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    } else {
        problem.innerHTML = "";
        transition.innerHTML = "Sure!<br>Let's add.";
        setTimeout(function() {
            randomAddition();
            transition.innerHTML = "";
            removeListeners();
            left.addEventListener('click', randomAddition);
            right.addEventListener('click', randomAddition);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomAddition();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    }
}

function loadSubtraction() {
    if (introContainer.classList.contains('active')) {
        intro.innerHTML = "All right! Let's try subtracting.";
        delayedFlip();
        setTimeout(function() {
            introContainer.classList.remove('active');
            generatedContainer.classList.add('active');
            randomSubtraction();
            left.addEventListener('click', randomSubtraction);
            right.addEventListener('click', randomSubtraction);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomSubtraction();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    } else {
        problem.innerHTML = "";
        transition.innerHTML = "Okay!<br>It's time for subtraction.";
        setTimeout(function() {
            randomSubtraction();
            transition.innerHTML = "";
            removeListeners();
            left.addEventListener('click', randomSubtraction);
            right.addEventListener('click', randomSubtraction);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomSubtraction();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    }
}

function loadMultiplication() {
    if (introContainer.classList.contains('active')) {
        intro.innerHTML = "Sure! Let's multiply.";
        delayedFlip();
        setTimeout(function() {
            introContainer.classList.remove('active');
            generatedContainer.classList.add('active');
            randomMultiplication();
            left.addEventListener('click', randomMultiplication);
            right.addEventListener('click', randomMultiplication);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomMultiplication();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    } else {
        problem.innerHTML = "";
        transition.innerHTML = "Okay!<br>Let's try multiplication.";
        setTimeout(function() {
            randomMultiplication();
            transition.innerHTML = "";
            removeListeners();
            left.addEventListener('click', randomMultiplication);
            right.addEventListener('click', randomMultiplication);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomMultiplication();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    }
}

function loadDivision() {
    if (introContainer.classList.contains('active')) {
        intro.innerHTML = "Great! Let's do some division.";
        delayedFlip();
        setTimeout(function() {
            introContainer.classList.remove('active');
            generatedContainer.classList.add('active');
            randomDivision();
            left.addEventListener('click', randomDivision);
            right.addEventListener('click', randomDivision);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomDivision();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    } else {
        problem.innerHTML = "";
        transition.innerHTML = "Okay!<br>Now for some division.";
        setTimeout(function() {
            randomDivision();
            transition.innerHTML = "";
            removeListeners();
            left.addEventListener('click', randomDivision);
            right.addEventListener('click', randomDivision);
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
                randomDivision();
            }
        })
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
    }
}