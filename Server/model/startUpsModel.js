const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
    startup_name : {
        type : String,
        required : false,
    },
    startup_logo : {
        type : String,
        required : false,
    }
})

const StartUps = mongoose.model("startUp", startupSchema);

module.exports = StartUps ;