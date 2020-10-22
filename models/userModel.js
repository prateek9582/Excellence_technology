const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter name"]
    },
    email :{
        type : String,
        unique : true,
        required : [true, "Please enter your email"],
        validate : validator.isEmail
    },
    password : {
        type : String,
        minlength : 5,
        required:[true,"Please enter password"]
    },
    first_round:{
        type:Number,
        max:10,
        min:0
    },
    second_round:{
        type:Number,
        max:10,
        min:0
    },
    third_round:{
        type:Number,
        max:10,
        min:0
    }
});

const userModel = mongoose.model("usermodel",userSchema);

module.exports = userModel;
