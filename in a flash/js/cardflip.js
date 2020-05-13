const introCard = document.getElementById('intro-card');

const flipCard = () => {
    if (lettersContainer.classList.contains('active'))  {
       letterCard.classList.toggle('flipped'); 
    } else if (numbersContainer.classList.contains('active')) {
        numberCard.classList.toggle('flipped'); 
    } else if (notesContainer.classList.contains('active')) {
        noteCard.classList.toggle('flipped'); 
    }  
}

const delayedFlip = () => {
    setTimeout(function() {
        introCard.classList.toggle('flipped');
    }, 800);
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        flipCard();
    }
})

letterCard.addEventListener('click', flipCard);

numberCard.addEventListener('click', flipCard);

noteCard.addEventListener('click', flipCard);


