const Mcq = require("../models/questionModel");

const getQuestion = async (req, res) => {
    try {
        const mcqs = await Mcq.find();
        res.json(mcqs);
    } catch (err) {
        res.send("error");
    }
};

const addQuestion = async (req, res) => {
    try {
        const mcqData = req.body;
        const updatedMcq = await Mcq.findOneAndUpdate(
            { question: mcqData.question },
            mcqData,
            { new: true, upsert: true }
        );
        res.status(201).json(updatedMcq);
    } catch (err) {
        res.send("error");
    }
};

const deleteQuestion = async (req, res) => {
    try {
        await Mcq.findByIdAndDelete(req.params.id);
        res.send("MCQ deleted successfully");
    } catch (err) {
        res.send("Error deleting the MCQ");
    }
};

module.exports = { getQuestion, addQuestion ,deleteQuestion };
