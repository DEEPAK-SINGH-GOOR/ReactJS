const { Router } = require("express");
const { getQuestion, addQuestion ,deleteQuestion} = require("../controllers/questionController");

const mcqRouter = Router();

mcqRouter.get("/", getQuestion);

mcqRouter.post("/", addQuestion);
mcqRouter.delete("/:id", deleteQuestion);  
module.exports = mcqRouter;