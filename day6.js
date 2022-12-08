const executor = require('./executor_helper');

/**
 * Day6 Challenge 1
 */

const repeated = (substr) => {
    const values = {};
    
    for (const letter of substr) {
        values[letter] = (values[letter] || 0) + 1;
    }

    for (const key in values) {
        if (values[key] > 1) {
            return true;
        }
    }

    return false;
}

const day6 = executor.getData('day6.txt', (filedata) => {

    let init = 0;
    let end = 4;

    while (true) {
        if (!repeated(filedata.substring(init, end))) {
            return init + filedata.substring(init, end).length;
        } else {
            init++;
            end++;
        }
    }
});

console.log(day6);

/**
 * Day6 Challenge 2
 */

const day6_2 = executor.getData('day6.txt', (filedata) => {

    let init = 0;
    let end = 14;

    while (true) {
        if (!repeated(filedata.substring(init, end))) {
            return init + filedata.substring(init, end).length;
        } else {
            init++;
            end++;
        }
    }

});

console.log(day6_2);