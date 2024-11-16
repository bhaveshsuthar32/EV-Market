const twoWheeler = require("../model/twoWheeler");
const dotenv = require('dotenv');
dotenv.config();
const asyncHandler = require("express-async-handler");
const { uploadFile } = require("../utils/cloudinary");

    const addTwoDetails = asyncHandler(async (req, res) => {
        const { type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color} = req.body;

        // if (!req.file) {
        //     return res.status(400).json({ error: 'No image file uploaded.' });
        // }

        // Upload image to Cloudinary
        // const result = await uploadFile(req.file);
        // console.log("Cloudinary Upload Result:", result); // This log is important

        // const [img1, img2, img3] = result;
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

module.exports = {
    addTwoDetails,
    getTwoDetails,
}