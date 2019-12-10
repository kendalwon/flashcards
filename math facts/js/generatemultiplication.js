const multNumbers = [0,1,2,3,4,5,6,7,8,9,10];
    
function setMultiplication() {
    let index = Math.floor(Math.random() * 11);
    let index2 = Math.floor(Math.random() * 11);
        let a = multNumbers[index];
        let b = multNumbers[index2];
        let c = a * b;
        problem.innerHTML = `${a}x${b}=`;
        answer.innerHTML = `${c}`;
}

function randomMultiplication() {
    if (generatedCard.classList.contains('flipped')) {
        generatedCard.classList.remove('flipped');
        setTimeout(function(){setMultiplication()}, 500);
    } else {
        setMultiplication();
    }
}