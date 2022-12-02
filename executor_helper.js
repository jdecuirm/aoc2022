const reader = require('./reader');

const executor = {
    getData: function(filedir, callback) {
        const filedata = reader.readFileData(filedir);
        return callback(filedata);
    }
}

module.exports = executor;