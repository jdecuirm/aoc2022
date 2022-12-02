const reader = require('./reader');
/**
 * A - X = Rock
 * B - Y = Paper
 * C - Z = Scissors
 * 
 * Rock = 1
 * Paper = 2
 * Scissors = 3
 * 
 * Win = 6
 * Draw = 3
 * Loss = 0
 */

const elfShapes = {
    A: 'rock',
    B: 'paper',
    C: 'scissors'
}

const myShapes = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
}

const processData = (fileData) => {
    const splitted = fileData.split('\n');
    
    const rounds = splitted.map((round) => round.split(' '));
    
    const results = rounds.map((round) => {
        let result = 0;
        const [elf, me] = round;
        if (myShapes[me] === 'rock') {
            // draw
            if (elfShapes[elf] === 'rock') {
                result = 1 + 3;
            }
            // loss
            if (elfShapes[elf] === 'paper') {
                result = 1 + 0;
            }
            // win
            if (elfShapes[elf] === 'scissors') {
                result = 1 + 6;
            }
        } 
        
        if (myShapes[me] === 'paper') {
            // draw
            if (elfShapes[elf] === 'paper') {
                result = 2 + 3;
            }
            // loss
            if (elfShapes[elf] === 'scissors') {
                result = 2 + 0;
            }
            // win
            if (elfShapes[elf] === 'rock') {
                result = 2 + 6;
            }
        }

        if (myShapes[me] === 'scissors') {
            // draw
            if (elfShapes[elf] === 'scissors') {
                result = 3 + 3;
            }
            // loss
            if (elfShapes[elf] === 'rock') {
                result = 3 + 0;
            }
            // win
            if (elfShapes[elf] === 'paper') {
                result = 3 + 6;
            }
        }

        return result;
    }).reduce((current, next) => current + next, 0);

    return results;
}

const getData = (fileDir) => {
    const fileData = reader.readFileData(fileDir);
    const data = processData(fileData);

    return data;
}

console.log(getData('day2.txt'));