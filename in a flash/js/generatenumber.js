const numbers = [
    {number: '0',
    image: 'images/0.jpg'},
    {number: '1',
    image: 'images/1.jpg'},
    {number: '2',
    image: 'images/2.jpg'},
    {number: '3',
    image: 'images/3.jpg'},
    {number: '4',
    image: 'images/4.jpg'},
    {number: '5',
    image: 'images/5.jpg'},
    {number: '6',
    image: 'images/6.jpg'},
    {number: '7',
    image: 'images/7.jpg'},
    {number: '8',
    image: 'images/8.jpg'},
    {number: '9',
    image: 'images/9.jpg'},
    {number: '10',
    image: 'images/10.jpg'},
    {number: '11',
    image: 'images/11.jpg'},
    {number: '12',
    image: 'images/12.jpg'},
    {number: '13',
    image: 'images/13.jpg'},
    {number: '14',
    image: 'images/14.jpg'},
    {number: '15',
    image: 'images/15.jpg'},
    {number: '16',
    image: 'images/16.jpg'},
    {number: '17',
    image: 'images/17.jpg'},
    {number: '18',
    image: 'images/18.jpg'},
    {number: '19',
    image: 'images/19.jpg'},
    {number: '20',
    image: 'images/20.jpg'}];
    
const number = document.getElementById('number');
const numberImg = document.getElementById('number-img');
const numberHint = document.getElementById('number-hint');

const numberCard = document.getElementById('number-card');

const setNumber = () => {
    let index = Math.floor(Math.random() * 21);
        let currentNumber = numbers[index].number;
        let currentNumberImg = numbers[index].image;
        number.innerHTML = `${currentNumber}`;
        numberImg.src = currentNumberImg;
        if (currentNumber == 1) {
            numberHint.innerHTML = `This is <span style='font-size:36px'>${currentNumber}</span> dot:`;
        } else {
            numberHint.innerHTML = `This is <span style='font-size:36px'>${currentNumber}</span> dots:`;
    }
}

const randomNumber = () => {
    if (numberCard.classList.contains('flipped')) {
        numberCard.classList.remove('flipped');
        setTimeout(function(){setNumber()}, 500);
    } else {
        setNumber();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
        randomNumber();
    }
})