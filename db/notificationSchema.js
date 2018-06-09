const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    title: { type: String },
    body: {type:String },
    updatedAt: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now}
});