const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name : {
        type : String,
        required : false,
    },
    brand_logo : {
        type : String,
        required : false,
    }
});

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand ;