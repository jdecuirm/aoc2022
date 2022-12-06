const executor = require('./executor_helper');

const isLowerCase = (char) => {
    return char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123;
};

const day3_1 = executor.getData('day3.txt', (filedata) => {
    // constants to calculate the value of the rucksack
    // they are calculated based on the ASCII table code
    // they generate 1 - 26 for lowercase and 27 - 52 for upper
    const lowerDiff = 96;
    const upperDiff = 38;
    const rucksacks = filedata.split('\n');

    // iterate over the rucksack
    // create a 2d array of divided rucksacks in half
    const rucksacksDivided = [];
    for (let i = 0; i < rucksacks.length; i++) {
        const compartments = [];
        const rucksack = rucksacks[i];
        // get the half of string
        const half = rucksack.length / 2;
        // store first and second items in each compartment
        compartments.push(
            rucksack.substring(0, half).split(''),
            rucksack.substring(half).split('')
        );
        // store each rucksack divided
        rucksacksDivided.push(compartments);
    }

    // iterate over the new 2d array and compare using frequency counter pattern
    const results = [];

    rucksacksDivided.forEach((rucksack) => {
        const items1 = rucksack[0];
        const items2 = rucksack[1];

        const itemsCount1 = {};
        const itemsCount2 = {};

        for (const item of items1) {
            itemsCount1[item] = (itemsCount1[item] || 0) + 1;
        }

        for (const item of items2) {
            itemsCount2[item] = (itemsCount2[item] || 0) + 1;
        }

        for (const key in itemsCount1) {
            if (key in itemsCount2) {
                if (isLowerCase(key)) {
                    results.push(Math.abs(key.charCodeAt(0) - lowerDiff));
                } else {
                    results.push(Math.abs(upperDiff - key.charCodeAt(0)));
                }
            }
        }
    });

    return results.reduce((current, next) => current + next, 0);
});

// console.log(day3_1);

/**
 * Challenge day 3 Part 2
 */

const day3_2 = executor.getData('day3.txt', (filedata) => {
    const lowerDiff = 96;
    const upperDiff = 38;
    //split data
    const rucksacks = filedata.split('\n');

    // create teams of elves!
    const teams = [];

    while (rucksacks.length > 0) {
        const team = [];

        for (let i = 0; i < 3; i++) {
            team.push(rucksacks.shift().split(''));
        }

        teams.push(team);
    }

    const results = [];
    teams.forEach((team) => {
        const rucksack1 = team[0];
        const rucksack2 = team[1];
        const rucksack3 = team[2];

        // Filter the value that is in other two rucksacks
        // because of includes it will repeat in some instances the value
        // Using set to avoid repetition then transform the result in an array.

        results.push(Array.from(new Set(rucksack1.filter((item) => {
            return rucksack2.includes(item) && rucksack3.includes(item);
        })))[0]);
    });

    return total = results.map((item) => {
        if (isLowerCase(item)) {
            return Math.abs(item.charCodeAt(0) - lowerDiff);
        }
        return Math.abs(upperDiff - item.charCodeAt(0));
    }).reduce((current, next) => current + next);
});

console.log(day3_2);