/**
 * Day2 Part 1 Challenge
 */

const executor = require('./executor_helper');
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

const day2 = executor.getData('day2.txt', (filedata) => {
    const elfShapes = {
        A: 'rock',
        B: 'paper',
        C: 'scissors',
    };

    const myShapes = {
        X: 'rock',
        Y: 'paper',
        Z: 'scissors',
    };

    const splitted = filedata.split('\n');

    const rounds = splitted.map((round) => round.split(' '));

    const results = rounds
        .map((round) => {
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
        })
        .reduce((current, next) => current + next, 0);

    return results;
});

console.log(day2);

/**
 * Day2 Part 2 Challenge
 */

const day2_2 = executor.getData('day2.txt', (filedata) => {
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

    const splitted = filedata.split('\n');

    const rounds = splitted.map((round) => round.split(' '));

    const results = rounds.map((round) => {
        const [elfMove, roundRes] = round;

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
});

console.log(day2_2);
