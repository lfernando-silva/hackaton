const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.promise = Promise;
mongoose.connect(process.env.DATABASE_URL);

module.exports = mongoose;