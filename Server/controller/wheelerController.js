const twoWheeler = require("../model/twoWheeler");
const dotenv = require('dotenv');
dotenv.config();
const asyncHandler = require("express-async-handler");


const addTwoDetails = asyncHandler(async (req, res) => {
    const twoData = req.body;

    const addTwoData = twoWheeler(twoData);
    const saveTwoData = await addTwoData.save();
    res.status(201).json(saveTwoData)

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