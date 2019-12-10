function flipCard() {
    card.classList.toggle('flipped');
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        flipCard();
    }
})

card.addEventListener('click', flipCard)