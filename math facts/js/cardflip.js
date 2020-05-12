const introCard = document.getElementById('intro-card');
const generatedContainer = document.getElementById('generated-card-container');
const generatedCard = document.getElementById('generated-card');

const flipCard = () => {
    if (generatedContainer.classList.contains('active'))  {
       generatedCard.classList.toggle('flipped'); 
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

introCard.addEventListener('click', delayedFlip);

generatedCard.addEventListener('click', flipCard);


