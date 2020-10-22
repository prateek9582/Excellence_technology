const express = require("express");
const {SignUp , login, updateround,protectroute} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/signup").post(SignUp);
userRouter.route("/login").post(login);
userRouter.route("/updateround").post(protectroute,updateround);
module.exports = userRouter;