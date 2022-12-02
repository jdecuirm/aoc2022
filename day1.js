const reader = require('./reader');

const processData = (fileData) => {
    const splitted = fileData.split('\n');
    const results = [];
    let arr = [];

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] !== '') {
            arr.push(parseInt(splitted[i]));
        } else {
            results.push(arr);
            arr = [];
            continue;
        }
    }

    return results.map((elf) => {
        return elf.reduce((currentVal, nextVal) => currentVal + nextVal, 0);
    }).reduce((currentVal, nextVal) => {
        if (currentVal > nextVal) return currentVal;
        return nextVal;
    });
}

const getData = (fileDir) => {
    const fileData = reader.readFileData(fileDir);
    const data = processData(fileData);

    return data;
}

console.log(getData('day1.txt'));