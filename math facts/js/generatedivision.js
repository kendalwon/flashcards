const divNumbers = [
    [20,5],
    [20,4],
    [20,2],
    [18,9],
    [18,6],
    [18,3],
    [18,2],
    [16,8],
    [16,4],
    [16,2],
    [15,5],
    [15,3],
    [14,7],
    [14,2],
    [12,6],
    [12,4],
    [12,3],
    [12,2],
    [10,5],
    [10,2],
    [9,3],
    [9,1],
    [8,4],
    [8,2],
    [8,1],
    [7,7],
    [6,3],
    [6,2],
    [6,1],
    [5,1],
    [4,2],
    [4,4],
    [3,1],
    [2,2],
    [2,1],
    [1,1]
];

const setDivision = () => {
    let index = Math.floor(Math.random() * 36);
    let a = divNumbers[index][0];
    let b = divNumbers[index][1];
    let c = a / b;
    problem.innerHTML = `${a}÷${b}=`;
    answer.innerHTML = `${c}`;
}

const randomDivision = () => {
    if (generatedCard.classList.contains('flipped')) {
        generatedCard.classList.remove('flipped');
        setTimeout(function(){setDivision()}, 500);
    } else {
        setDivision();
    }
}