const executor = require('./executor_helper');

const isValidMove = (x, y, limit) => {
    return x >= 0 && x < limit && y >= 0 && y < limit;
}

const day8 = executor.getData('day8demo.txt', (filedata) => {
    const grid = filedata
        .split('\n')
        .map((trees) => trees.split(''))
        .map((trees) => trees.map((tree) => parseInt(tree)));

    return grid;
});

console.log(day8);
