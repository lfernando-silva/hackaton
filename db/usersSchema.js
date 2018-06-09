const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    nome: { type: String, required: "Insira seu primeiro nome" },
    email: {type:String, required: "Insira seu email" },
    updatedAt: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now}
});