const subNumbers = [1,2,3,4,5,6,7,8,9,10];

const setSubtraction = () => {
    let index = Math.floor(Math.random() * 10);
    let a = subNumbers[index];
    let newNumbers = subNumbers.slice(0, index);
    newNumbers.unshift(0);
    let index2 = Math.floor(Math.random() * newNumbers.length);
    let b = newNumbers[index2];
    let c = a - b;
    problem.innerHTML = `${a}-${b}=`;
    answer.innerHTML = `${c}`;
}

const randomSubtraction = () => {
    if (generatedCard.classList.contains('flipped')) {
        generatedCard.classList.remove('flipped');
        setTimeout(function(){setSubtraction()}, 500);
    } else {
        setSubtraction();
    }
}


