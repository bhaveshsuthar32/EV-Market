const twoWheeler = require("../model/twoWheeler");

const dotenv = require('dotenv');
dotenv.config();
const asyncHandler = require("express-async-handler");
const { uploadFile } = require("../utils/cloudinary");
const threeWheeler = require("../model/threeWheeler");
const fourWheeler = require("../model/fourWheeler");


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

const getTwoDataById = async (req, res)=>{
    try {
        const { id } = req.params;

        // finding the team by ID
        const twoData = await twoWheeler.findById(id);
        console.log(twoData);
        res.status(200).json(twoData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const deleteTwoDetails = async (req, res) => {
    try {
        const id = req.params.id ;

        const userData = await twoWheeler.findById(id);
        if(!userData){
            return res.status(404).json({message : "two wheeler data not found"})
        }

        await twoWheeler.findByIdAndDelete(id);
        res.status(200).json({message : "delete successfully "})
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: error.message });
    }
  };
  

  // Bike :-

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

// Scooter :-

const getScooterData = async(req, res) =>{
    try {
        const scooterData = await twoWheeler.find({ type : "E-Scooter"});
        res.status(200).json(scooterData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

const getScooterUpcoming = async(req, res) =>{
    try {
        const scooterData = await twoWheeler.find({ type : "E-Scooter", upcomming_and_used : "Upcoming" });
        res.status(200).json(scooterData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

const getScooterUsed = async(req, res) =>{
    try {
        const scooterData = await twoWheeler.find({ type : "E-Scooter", upcomming_and_used : "Used"});
        res.status(200).json(scooterData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}



// three wheeler :-

const addThreeData = async (req, res) => {
    try {
        const { type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color} = req.body;

        const uploadResults = await Promise.all(
            Object.values(req.files).flat().map((file) => uploadFile(file))
          );
      
          // Destructure uploaded image URLs
          const [img1, img2, img3] = uploadResults;
    
        const addThreeData = new threeWheeler({type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color, img1, img2, img3});
    
        const saveThreeData = await addThreeData.save();
        res.status(201).json(saveThreeData);

    } catch (error) {
        res.status(500).json({error : error.message})
    }

}


const getThreeData = async (req,res) =>{
    try {
        const threeData = await threeWheeler.find();
        res.status(200).json(threeData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const getThreeDataById = async (req, res)=>{
    try {
        const { id } = req.params;

        // finding the team by ID
        const threeData = await threeWheeler.findById(id);
        console.log(threeData);
        res.status(200).json(threeData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}


const deleteThreeDetails = async (req, res) => {
    try {
        const id = req.params.id ;

        const userData = await threeWheeler.findById(id);
        if(!userData){
            return res.status(404).json({message : "two wheeler data not found"})
        }

        await threeWheeler.findByIdAndDelete(id);
        res.status(200).json({message : "delete successfully "})
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: error.message });
    }
  };
  

  // Rickshaws  :-

const getRickshawData = async(req, res) =>{
    try {
        const rickshawData = await threeWheeler.find({ type : "E-Rickshaw"});
        res.status(200).json(rickshawData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}

const getRickshawUpcoming = async(req, res) =>{
    try {
        const rickshawData = await threeWheeler.find({ type : "E-Rickshaw", upcomming_and_used : "Upcoming" });
        res.status(200).json(rickshawData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}


const getRickshawUsed = async(req, res) =>{
    try {
        const rickshawData = await threeWheeler.find({ type : "E-Rickshaw", upcomming_and_used : "Used"});
        res.status(200).json(rickshawData);
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error : error.message});
    }
}




// Four Wheeler :-

const addFourData = async (req, res) => {
    try {
        const { type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color} = req.body;

        const uploadResults = await Promise.all(
            Object.values(req.files).flat().map((file) => uploadFile(file))
          );
      
 
          const [img1, img2, img3] = uploadResults;
    
        const addFourData = new fourWheeler({type, brand, upcomming_and_used, vehicle_name, speed, range, motor_power, battery, charging_time, battery_charger, showroom_price, color, img1, img2, img3});
    
        const saveFourData = await addFourData.save();
        res.status(201).json(saveFourData);

    } catch (error) {
        res.status(500).json({error : error.message})
    }

}


const getFourData = async (req,res) =>{
    try {
        const FourData = await fourWheeler.find();
        res.status(200).json(FourData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}


const getFourDataById = async (req, res)=>{
    try {
        const { id } = req.params;

        // finding the team by ID
        const FourData = await fourWheeler.findById(id);
        console.log(FourData);
        res.status(200).json(FourData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    addTwoDetails,
    getTwoDetails,
    getTwoDataById,
    deleteTwoDetails,
    getBikeData,
    getBikeUpcoming,
    getBikeUsed,
    getScooterData,
    getScooterUpcoming,
    getScooterUsed,
    addThreeData,
    getThreeData,
    getThreeDataById,
    deleteThreeDetails,
    getRickshawData,
    getRickshawUpcoming,
    getRickshawUsed,
    addFourData,
    getFourData,
    getFourDataById,
}