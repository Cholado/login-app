//set up library format datetime as time ago
const { format } = require('timeago.js');

const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return format(savedTimestamp);
};

module.exports = helpers;