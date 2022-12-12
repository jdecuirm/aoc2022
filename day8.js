const executor = require('./executor_helper');

const isValidMove = () => {

}

const day8 = executor.getData('day8demo.txt', (filedata) => {
    const grid = filedata
        .split('\n')
        .map((trees) => trees.split(''))
        .map((trees) => trees.map((tree) => parseInt(tree)));

    
});

console.log(day8);
