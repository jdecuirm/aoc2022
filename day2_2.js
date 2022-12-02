const reader = require('./reader');
/**
 * A = Rock
 * B = Paper
 * C = Scissors
 * 
 * X = lose
 * Y = draw
 * Z = win
 * 
 * Rock = 1
 * Paper = 2
 * Scissors = 3
 * 
 * Win = 6
 * Draw = 3
 * Loss = 0
 */

const shapes = {
    A: 'rock',
    B: 'paper',
    C: 'scissors'
}

const roundResult = {
    X: 'lose',
    Y: 'draw',
    Z: 'win'
}

const processData = (fileData) => {
    const splitted = fileData.split('\n');
    
    const rounds = splitted.map((round) => round.split(' '));

    const results = rounds.map((round) => {
        const[elfMove, roundRes] = round;

        if (roundResult[roundRes] === 'win') {

            if (shapes[elfMove] === 'rock') {
                return 2 + 6;
            }

            if (shapes[elfMove] === 'paper') {
                return 3 + 6;
            }

            if (shapes[elfMove] === 'scissors') {
                return 1 + 6;
            }

        }

        if (roundResult[roundRes] === 'draw') {

            if (shapes[elfMove] === 'rock') {
                return 1 + 3;
            }

            if (shapes[elfMove] === 'paper') {
                return 2 + 3;
            }

            if (shapes[elfMove] === 'scissors') {
                return 3 + 3;
            }
        }

        if (roundResult[roundRes] === 'lose') {

            if (shapes[elfMove] === 'rock') {
                return 3 + 0;
            }

            if (shapes[elfMove] === 'paper') {
                return 1 + 0;
            }

            if (shapes[elfMove] === 'scissors') {
                return 2 + 0;
            }
        }

    });
    
    return results.reduce((current, next) => current + next, 0);
}

const getData = (fileDir) => {
    const fileData = reader.readFileData(fileDir);
    const data = processData(fileData);

    return data;
}

console.log(getData('day2.txt'));