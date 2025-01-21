const Mcq = require("../models/questionModel");

const getMcqs = async (req, res) => {
    try {
        const mcqs = await Mcq.find();
        res.json(mcqs);
    } catch (err) {
        res.send("error");
    }
};

const addMcq = async (req, res) => {
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

module.exports = { getMcqs, addMcq };
