const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let questions = [];

app.post("/api/question", (req, res) => {
    const { questionNo, question, answer } = req.body;
    questions.push({ questionNo, question, answer });
    res.send("Question added successfully!");
});

app.get("/api/question", (req, res) => {
    res.send(questions);
});

app.listen(8090, () => {
    console.log("Server is running on 8090");
});
