const okay = document.getElementById('okay');
const introContainer = document.getElementById('intro-card-container');
const lettersContainer = document.getElementById('letters-card-container');
const numbersContainer = document.getElementById('numbers-card-container');
const notesContainer = document.getElementById('notes-card-container');
const instructions = document.getElementById('instructions');

function loadLetters() {
    okay.innerHTML = "Okay. Let's learn letters!";
    delayedFlip();
    setTimeout(function() {
        introContainer.classList.remove('active');
        lettersContainer.classList.add('active');
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
}

function loadNumbers() {
    okay.innerHTML = "All right. Let's learn numbers!";
    delayedFlip();
    setTimeout(function() {
        introContainer.classList.remove('active');
        numbersContainer.classList.add('active');
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
}

function loadNotes() {
    okay.innerHTML = "Sounds good. Let's learn notes!";
    delayedFlip();
    setTimeout(function() {
        introContainer.classList.remove('active');
        notesContainer.classList.add('active');
        instructions.innerHTML = 'Click arrows or press an arrow key for a new card.<br>Click the card or press enter for a hint.'
    }, 1500);
}