const notes = [
        {letter: 'A',
        image: 'media/images/a.jpg'},
        {letter: 'B',
        image: 'media/images/b.jpg'},
        {letter: 'C',
        image: 'media/images/c.jpg'},
        {letter: 'D',
        image: 'media/images/d.jpg'},
        {letter: 'E',
        image: 'media/images/e.jpg'},
        {letter: 'F',
        image: 'media/images/f.jpg'},
        {letter: 'G',
        image: 'media/images/g.jpg'},
        {letter: 'A',
        image: 'media/images/high-a.jpg'},
        {letter: 'E',
        image: 'media/images/high-e.jpg'},
        {letter: 'F',
        image: 'media/images/high-f.jpg'},
        {letter: 'G',
        image: 'media/images/high-g.jpg'},
        {letter: 'A',
        image: 'media/images/low-a.jpg'},
        {letter: 'B',
        image: 'media/images/low-b.jpg'},
        {letter: 'C',
        image: 'media/images/low-c.jpg'},
        {letter: 'D',
        image: 'media/images/low-d.jpg'}, 
        {letter: 'G',
        image: 'media/images/low-g.jpg'}];
    const img = document.getElementById('img');
    const answer = document.getElementById('answer');

    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const card = document.getElementById('card');

    const aButton = document.getElementById('a-button');
    const bButton = document.getElementById('b-button');
    const cButton = document.getElementById('c-button');
    const dButton = document.getElementById('d-button');
    const eButton = document.getElementById('e-button');
    const fButton = document.getElementById('f-button');
    const gButton = document.getElementById('g-button');
    const currentScore = document.getElementById('current-score');

    let currentNoteLetter = 'A';

    const setNote = () => {
        let index = Math.floor(Math.random() * 16);
        let currentNoteImg = notes[index].image;
        img.src = currentNoteImg;
        currentNoteLetter = notes[index].letter;
        answer.innerHTML = `This is the <span style='font-size:60px'>${currentNoteLetter}</span> note.`;
    }

    const randomNote = () => {
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
            setTimeout(function(){setNote()}, 500);
        } else {
            setNote();
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 38) {
            randomNote();
        }
    })

    let correct = 0;
    let total = 0;
    const checkAnswer = (e) => {
        if (e.target.value === currentNoteLetter) {
            correct++;
        } else {
            const audio = document.getElementById('wrong-sound');
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
        total++;
        currentScore.innerHTML = "Your current score is: " + correct + "/" + total;
        randomNote();
    }

    aButton.addEventListener('click', checkAnswer)
    bButton.addEventListener('click', checkAnswer)
    cButton.addEventListener('click', checkAnswer)
    dButton.addEventListener('click', checkAnswer)
    eButton.addEventListener('click', checkAnswer)
    fButton.addEventListener('click', checkAnswer)
    gButton.addEventListener('click', checkAnswer)



