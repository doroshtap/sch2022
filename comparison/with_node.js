const crypto = require('crypto');
const moment = require('moment');
const iterations = 100000;

let startDate = moment();

function makeString(length) {
    return crypto.randomBytes(length).toString('utf8');
}

for (let i = 0; i < iterations; i++) {
    crypto.createHash('sha256').update(makeString(12)).digest('hex');
}

let endDate = moment();

console.log(endDate.diff(startDate, 'milliseconds'));
