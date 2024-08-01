const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongodb = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("connection successfull")
    } catch (error) {
        console.log('error : ', error)
    }
}


module.exports = mongodb