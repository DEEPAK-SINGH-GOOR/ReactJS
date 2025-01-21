const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mcqRouter = require("../backend/routes/questionRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/mcq", mcqRouter);

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mcqExamDB");
        console.log("MongoDB connected for MCQ exam system");
    } catch (err) {
        console.log(err.message);
    }
};

dbConnect();

app.listen(8090, () => {
    console.log("Server running on port 8090");
});
