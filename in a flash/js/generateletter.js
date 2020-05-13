const letters = [
    {letter: 'A',
    image: 'images/apple.jpg'},
    {letter: 'B',
    image: 'images/bee.jpg'},
    {letter: 'C',
    image: 'images/cat.jpg'},
    {letter: 'D',
    image: 'images/dog.jpg'},
    {letter: 'E',
    image: 'images/eggs.jpg'},
    {letter: 'F',
    image: 'images/fish.jpg'},
    {letter: 'G',
    image: 'images/grapes.jpg'},
    {letter: 'H',
    image: 'images/house.jpg'},
    {letter: 'I',
    image: 'images/icecream.jpg'},
    {letter: 'J',
    image: 'images/jellyfish.jpg'},
    {letter: 'K',
    image: 'images/kangaroo.jpg'},
    {letter: 'L',
    image: 'images/lizard.jpg'},
    {letter: 'M',
    image: 'images/moon.jpg'},
    {letter: 'N',
    image: 'images/nose.jpg'},
    {letter: 'O',
    image: 'images/octopus.jpg'},
    {letter: 'P',
    image: 'images/penguin.jpg'},
    {letter: 'Q',
    image: 'images/queen.jpg'},
    {letter: 'R',
    image: 'images/ring.jpg'},
    {letter: 'S',
    image: 'images/spider.jpg'},
    {letter: 'T',
    image: 'images/train.jpg'},
    {letter: 'U',
    image: 'images/unicorn.jpg'},
    {letter: 'V',
    image: 'images/vase.jpg'},
    {letter: 'W',
    image: 'images/whale.jpg'},
    {letter: 'X',
    image: 'images/xray.jpg'},
    {letter: 'Y',
    image: 'images/yak.jpg'},
    {letter: 'Z',
    image: 'images/zebra.jpg'},
    {letter: 'a',
    image: 'images/apple.jpg'},
    {letter: 'b',
    image: 'images/bee.jpg'},
    {letter: 'c',
    image: 'images/cat.jpg'},
    {letter: 'd',
    image: 'images/dog.jpg'},
    {letter: 'e',
    image: 'images/eggs.jpg'},
    {letter: 'f',
    image: 'images/fish.jpg'},
    {letter: 'g',
    image: 'images/grapes.jpg'},
    {letter: 'h',
    image: 'images/house.jpg'},
    {letter: 'i',
    image: 'images/icecream.jpg'},
    {letter: 'j',
    image: 'images/jellyfish.jpg'},
    {letter: 'k',
    image: 'images/kangaroo.jpg'},
    {letter: 'l',
    image: 'images/lizard.jpg'},
    {letter: 'm',
    image: 'images/moon.jpg'},
    {letter: 'n',
    image: 'images/nose.jpg'},
    {letter: 'o',
    image: 'images/octopus.jpg'},
    {letter: 'p',
    image: 'images/penguin.jpg'},
    {letter: 'q',
    image: 'images/queen.jpg'},
    {letter: 'r',
    image: 'images/ring.jpg'},
    {letter: 's',
    image: 'images/spider.jpg'},
    {letter: 't',
    image: 'images/train.jpg'},
    {letter: 'u',
    image: 'images/unicorn.jpg'},
    {letter: 'v',
    image: 'images/vase.jpg'},
    {letter: 'w',
    image: 'images/whale.jpg'},
    {letter: 'x',
    image: 'images/xray.jpg'},
    {letter: 'y',
    image: 'images/yak.jpg'},
    {letter: 'z',
    image: 'images/zebra.jpg'}];
const letter = document.getElementById('letter');
const letterImg = document.getElementById('letter-img');
const letterHint = document.getElementById('letter-hint');

const letterCard = document.getElementById('letter-card');

const setLetter = () => {
    let index = Math.floor(Math.random() * 52);
    let currentLetter = letters[index].letter;
    let currentLetterImg = letters[index].image;
    letter.innerHTML = `${currentLetter}`;
    letterImg.src = currentLetterImg;
    letterHint.innerHTML = `<span style='font-size:36px'>${currentLetter}</span> is for:`;
}

const randomLetter = () => {
    if (letterCard.classList.contains('flipped')) {
        letterCard.classList.remove('flipped');
        setTimeout(function(){setLetter()}, 500);
    } else {
        setLetter();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
        randomLetter();
    }
})