const mongoose = require("mongoose");

const McqSchema = new mongoose.Schema({
    question: { type: String },
    optionA: { type: String },
    optionB: { type: String },
    optionC: { type: String },
    optionD: { type: String },
    correctAnswer: { type: String },
});

const Mcq = mongoose.model("Mcq", McqSchema);
module.exports = Mcq;
