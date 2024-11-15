const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
    isAdmin : {
        type : Boolean,
        default : false
    },
    refreshToken : {
        type : String
    },
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin ;