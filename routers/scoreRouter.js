const express = require("express");
const {highestscore, averagescore} = require("../controllers/scoreController")

const scoreRouter = express.Router();

scoreRouter.route("/highestscore").get(highestscore);
scoreRouter.route("/average").get(averagescore);

module.exports = scoreRouter;