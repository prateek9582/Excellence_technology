const mongoose = require("mongoose");
const config = require("../configs/config");
// console.log(config);
mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})