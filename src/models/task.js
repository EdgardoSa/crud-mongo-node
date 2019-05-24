const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    id: Number,
    name: String,
    lastname: String,
    dni: String
});

module.exports = mongoose.model("clientes" ,TaskSchema);