const executor = require('./executor_helper');

const day4 = executor.getData('day4.txt', (filedata) => {

    const pairs = filedata.split('\n').map((pair) => pair.split(',')).map((pair) => pair.map((el) => el.split('-')).map((pair) => pair.map((num) => parseInt(num))));

    let result = 0; 
    
    pairs.forEach(pair => {
        const [firstPair, secondPair] = pair;
        const [firstB, firstE] = firstPair;
        const [secondB, secondE] = secondPair;

        if (firstB <= secondB && firstE >= secondE) {
            result++;
        } else if (secondB <= firstB && secondE >= firstE) {
            result++;
        }
    });

    return result;
});

const day4_2 = executor.getData('day4.txt', (filedata) => {
    const pairs = filedata.split('\n').map((pair) => pair.split(',')).map((pair) => pair.map((el) => el.split('-')).map((pair) => pair.map((num) => parseInt(num))));

    let result = 0;

    pairs.forEach(pair => {
        const [firstPair, secondPair] = pair;
        const [firstB, firstE] = firstPair;
        const [secondB, secondE] = secondPair;

        if (!((firstB < secondB && firstE < secondB) || (firstB > secondE && firstE > secondE))) {
            result += 1;
        }
    });

    return result;
});

console.log(day4_2);
