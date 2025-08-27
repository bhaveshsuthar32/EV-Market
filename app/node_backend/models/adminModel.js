const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email : {
        type : String,
        require : false
    },
    password : {
        type : String,
        require : false
    },
    isAdmin : {
        type : Boolean,
        require : false,
    }
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;