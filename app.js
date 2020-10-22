const express = require("express");
const app = express();
require("./models/connection");
const cookieParser = require("cookie-parser");
const userRouter = require("./routers/userRouter");
const scoreRouter = require("./routers/scoreRouter");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/api/users",userRouter);
app.use("/api/scores",scoreRouter);
app.listen(3000, function(){
    console.log(`Server is listening at port 3000`);
})