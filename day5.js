const executor = require('./executor_helper');

/**
 * Day5 Challenge 1
 */
const day5 = executor.getData('day5.txt', (filedata) => {
    /**
     * creating the stacks of crates according to the input
     */
    const stacks = [
        ['F', 'C', 'P', 'G', 'Q', 'R'],
        ['W', 'T', 'C', 'P'],
        ['B', 'H', 'P', 'M', 'C'],
        ['L', 'T', 'Q', 'S', 'M', 'P', 'R'],
        ['P', 'H', 'J', 'Z', 'V', 'G', 'N'],
        ['D', 'P', 'J'],
        ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'],
        ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'],
        ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W']
    ];

    /**
     * Getting a 2d array of the orders to follow to move the crates
     */

    const moves = filedata.split('\n').map((move) => move.split(' ')).map((move) => {
        const mv = [];
        move.forEach(item => {
            if (parseInt(item)) {
                mv.push(parseInt(item));
            }
        });

        return mv;
    });
    
    const process = (stacks, moves) => {
        if (moves.length === 0) return stacks;

        const [qty, initStack, endStack] = moves.shift();

        for (let i = 0; i < qty; i++) {
            stacks[endStack - 1].push(stacks[initStack - 1].pop());
        }

        return process(stacks, moves);
    };

    const result = process(stacks, moves).map((stack) => stack.map((item, index, stck) => {
        if (index === stck.length - 1) {
            return item;
        }

        return '';
    })).map((stack) => stack.filter((stk) => stk !== '')).join('');

    return result;
});

console.log(day5);

/**
 * Day5 Challenge 2
 */

const day5_2 = executor.getData('day5.txt', (filedata) => {

    /**
     * creating the stacks of crates according to the input
     */
    const stacks = [
        ['F', 'C', 'P', 'G', 'Q', 'R'],
        ['W', 'T', 'C', 'P'],
        ['B', 'H', 'P', 'M', 'C'],
        ['L', 'T', 'Q', 'S', 'M', 'P', 'R'],
        ['P', 'H', 'J', 'Z', 'V', 'G', 'N'],
        ['D', 'P', 'J'],
        ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'],
        ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'],
        ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W']
    ];

    /**
     * Getting a 2d array of the orders to follow to move the crates
     */

    const moves = filedata.split('\n').map((move) => move.split(' ')).map((move) => {
        const mv = [];
        move.forEach(item => {
            if (parseInt(item)) {
                mv.push(parseInt(item));
            }
        });

        return mv;
    });

    const process = (stacks, moves) => {
        if (moves.length === 0) return stacks;

        const [qty, initStack, endStack] = moves.shift();

        const temp = [];

        for (let i = 0; i < qty; i++) {
            temp.push(stacks[initStack - 1].pop());
        }
        stacks[endStack - 1].push(...temp.reverse());

        return process(stacks, moves);
    };

    const result = process(stacks, moves).map((stack) => stack.map((item, index, stck) => {
        if (index === stck.length - 1) {
            return item;
        }

        return '';
    })).map((stack) => stack.filter((stk) => stk !== '')).join('');

    return result;
});

console.log(day5_2);