const addNumbers = [0,1,2,3,4,5,6,7,8,9,10];
    
const problem = document.getElementById('problem');
const answer = document.getElementById('answer');
const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');

const setAddition = () => {
    let index = Math.floor(Math.random() * 11);
    let index2 = Math.floor(Math.random() * 11);
        let a = addNumbers[index];
        let b = addNumbers[index2];
        let c = a + b;
        problem.innerHTML = `${a}+${b}=`;
        answer.innerHTML = `${c}`;
}

const randomAddition = () => {
    if (generatedCard.classList.contains('flipped')) {
        generatedCard.classList.remove('flipped');
        setTimeout(function(){setAddition()}, 500);
    } else {
        setAddition();
    }
}



