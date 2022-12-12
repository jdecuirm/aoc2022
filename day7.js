const executor = require('./executor_helper');

class File {
    constructor(name, size, parent) {
        this.name = name;
        this.size = size;
        this.parent = parent;
    }
}

class Directory {
    constructor(name) {
        this.name = name;
        this.children = new Map();
        this.parent = null;
    }

    get size() {
        let result = 0;
        for (const child of this.children.values()) {
            result += child.size;
        }

        return result;
    }
}

const day7 = executor.getData('day7.txt', (filedata) => {
    const commands = filedata
        .split('\n')
        .map((command) =>
            command.split(' ').filter((cmd) => {
                return cmd !== '$' && cmd !== 'ls';
            })
        )
        .filter((command) => command.length)
        .map((cmd) => cmd.join(' '));

    // root directory (/)
    const rootDir = new Directory();
    // pointer to the current directory to navigate the directories
    let currentDir = new Directory();

    commands.forEach((command) => {
        const [cmdOrFTypeOrSize, pathOrFname] = command.split(' ');

        if (cmdOrFTypeOrSize === 'cd') {
            if (pathOrFname === '/') {
                rootDir.name = '/';
                currentDir = rootDir;
            } else if (pathOrFname === '..') {
                currentDir = currentDir.parent;
            } else {
                currentDir = currentDir.children.get(pathOrFname);
            }
        }

        if (cmdOrFTypeOrSize === 'dir') {
            const newDir = new Directory(pathOrFname);
            newDir.parent = currentDir;
            currentDir.children.set(newDir.name, newDir);
        } else if (!isNaN(parseInt(cmdOrFTypeOrSize))) {
            const newFile = new File(
                pathOrFname,
                parseInt(cmdOrFTypeOrSize),
                currentDir
            );
            currentDir.children.set(newFile.name, newFile);
        }
    });

    return rootDir;
});

/**
 * Day7 Challenge 1
 */

const findSize = (dir) => {
    let result = 0;

    const getDirs = (inner) => {
        if (inner.size <= 100000) {
            result += inner.size;
        }
        for (const child of inner.children.values()) {
            if (child instanceof Directory) {
                getDirs(child);
            }
        }
    };

    getDirs(dir);

    return result;
};

/**
 * Day7 Challenge 2
 */

const findSizeForDelete = (dir) => {
    const totalLeft = 70000000 - dir.size;
    const required = 30000000;

    const candidates = [];

    const findInner = (inner) => {
        if (inner.size + totalLeft >= required) {
            candidates.push(inner);
        }
        for (const child of inner.children.values()) {
            if (child instanceof Directory) {
                findInner(child);
            }
        }
    };

    findInner(dir);

    const sorted = candidates.sort((a, b) => {
        if (a.size < b.size) {
            return - 1;
        }
    });

    return sorted[0].size;
};

console.log(findSize(day7));

console.log(findSizeForDelete(day7));
