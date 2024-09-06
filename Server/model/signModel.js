const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    username : {
        type : String,
        required : false,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
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