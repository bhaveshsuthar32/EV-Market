const mongoose  = require("mongoose");

const fourSchema = new mongoose.Schema({
    type : {
        type : String,
        required : false,
    },
    brand : {
        type : String,
        required : false,
    },
    upcomming_and_used : {
        type : String,
        required : false,
    },
    vehicle_name : {
        type : String,
        required : false,
    },
    speed : {
        type : String,
        required : false,
    },
    range : {
        type : String,
        required : false,
    },
    motor_power : {
        type : String,
        required : false,
    },
    battery : {
        type : String,
        required : false,
    },
    charging_time : {
        type : String,
        required : false,
    },
    showroom_price : {
        type : String,
        required : false,
    },
    color : {
        type : String,
        required : false,
    },
    img1 : {
        type : String,
        required : false,
    },
    img2 : {
        type : String,
        required : false,
    },
    img3 : {
        type : String,
        required : false,
    },
},{ timestamps: true });

const fourWheeler = mongoose.model("fourWheeler", fourSchema);

module.exports = fourWheeler ;