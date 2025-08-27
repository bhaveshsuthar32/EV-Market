const mongoose  = require("mongoose");

const twoSchema = new mongoose.Schema({
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
    battery_charger : {
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
    variant_1 : {
        type : String,
        required : false,
    },
    variant1_price : {
        type : String,
        required : false,
    },
    variant1_specification : {
        type : String,
        required : false,
    },
    variant_2 : {
        type : String,
        required : false,
    },
    variant2_price : {
        type : String,
        required : false,
    },
    variant2_specification : {
        type : String,
        required : false,
    },
    
},{ timestamps: true });

const twoWheeler = mongoose.model("twoWheeler", twoSchema);

module.exports = twoWheeler ;