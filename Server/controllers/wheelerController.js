const twoWheeler = require("../model/twoWheeler");
const dotenv = require('dotenv');
dotenv.config();
const asyncHandler = require("express-async-handler");
const { uploadFile } = require("../utils/cloudinary");

    const addTwoDetails = asyncHandler(async (req, res) => {
        const { type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color} = req.body;

        const uploadResults = await Promise.all(
            Object.values(req.files).flat().map((file) => uploadFile(file))
          );
      
          // Destructure uploaded image URLs
          const [img1, img2, img3] = uploadResults;

        const addTwoData = new twoWheeler({type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color, img1, img2, img3});

        const saveTwoData = await addTwoData.save();
        res.status(201).json(saveTwoData);

    })

const getTwoDetails = async (req,res) =>{
    try {
        const twoData = await twoWheeler.find();
        res.status(200).json(twoData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const getBikeData = async(req, res) =>{
    try {
        const bikeData = await twoWheeler.find({ type : "E-Bike"});
        res.status(200).json(bikeData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

const getBikeUpcoming = async(req, res) =>{
    try {
        const bikeData = await twoWheeler.find({ type : "E-Bike", upcomming_and_used : "Upcoming" });
        res.status(200).json(bikeData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

const getBikeUsed = async(req, res) =>{
    try {
        const bikeData = await twoWheeler.find({ type : "E-Bike", upcomming_and_used : "Used"});
        res.status(200).json(bikeData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

module.exports = {
    addTwoDetails,
    getTwoDetails,
    getBikeData,
    getBikeUpcoming,
    getBikeUsed,
}