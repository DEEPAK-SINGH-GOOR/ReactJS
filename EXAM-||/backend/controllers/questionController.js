const Mcq = require("../models/questionModel");

const getQuestion = async (req, res) => {
    const mcqs = await Mcq.find();
    res.json(mcqs);
};


const addQuestion = async (req, res) => {
    const mcqData = new Mcq(req.body);
    const savedMcq = await mcqData.save();
    res.status(201).json(savedMcq);
};


const deleteQuestion = async (req, res) => {
    try {
        await Mcq.findByIdAndDelete(req.params.id);
        res.send("Mcq deleted ");
    } catch (err) {
        res.send("Error");
    }
};
module.exports = { getQuestion, addQuestion ,deleteQuestion };
