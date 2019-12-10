const notes = [
        {letter: 'A',
        image: 'images/a.jpg'},
        {letter: 'B',
        image: 'images/b.jpg'},
        {letter: 'C',
        image: 'images/c.jpg'},
        {letter: 'D',
        image: 'images/d.jpg'},
        {letter: 'E',
        image: 'images/e.jpg'},
        {letter: 'F',
        image: 'images/f.jpg'},
        {letter: 'G',
        image: 'images/g.jpg'},
        {letter: 'A',
        image: 'images/high-a.jpg'},
        {letter: 'E',
        image: 'images/high-e.jpg'},
        {letter: 'F',
        image: 'images/high-f.jpg'},
        {letter: 'G',
        image: 'images/high-g.jpg'},
        {letter: 'A',
        image: 'images/low-a.jpg'},
        {letter: 'B',
        image: 'images/low-b.jpg'},
        {letter: 'C',
        image: 'images/low-c.jpg'},
        {letter: 'D',
        image: 'images/low-d.jpg'}, 
        {letter: 'G',
        image: 'images/low-g.jpg'}];
    const noteImg = document.getElementById('note-img');
    const noteAnswer = document.getElementById('note-answer');

    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const noteCard = document.getElementById('note-card');

    function setNote() {
        let index = Math.floor(Math.random() * 16);
        let currentNoteImg = notes[index].image;
        noteImg.src = currentNoteImg;
        let currentNoteLetter = notes[index].letter;
        noteAnswer.innerHTML = `This is the <span style='font-size:60px'>${currentNoteLetter}</span> note.`;
    }

    function randomNote() {
        if (noteCard.classList.contains('flipped')) {
            noteCard.classList.remove('flipped');
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