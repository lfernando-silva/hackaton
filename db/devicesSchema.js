const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    identificator: { type: String },
    label: { type: String },
    updatedAt: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now}
});