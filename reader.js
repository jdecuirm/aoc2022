const fs = require('fs');

const reader = {
    readFileData: function(fileDir) {
        try {
            const data = fs.readFileSync(fileDir, 'utf-8');
            return data;
        } catch (error) {
            throw Error(`Error: ${error}`);
        }
    }
};

module.exports = reader;