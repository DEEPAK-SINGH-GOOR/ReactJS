const { Router } = require("express");
const { getMcqs, addMcq } = require("../controllers/questionController");

const mcqRouter = Router();

mcqRouter.get("/", getMcqs);
mcqRouter.post("/", addMcq);

module.exports = mcqRouter;
