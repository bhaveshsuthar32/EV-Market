const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    username : {
        type : String,
        required : false,
    },
    email : {
        type : String,
        required : false,
    },
    password : {
        type : String,
        required : false,
    },
    token : {
        type : String
    }
})

const sign = mongoose.model('sign', signSchema);

module.exports = sign ;