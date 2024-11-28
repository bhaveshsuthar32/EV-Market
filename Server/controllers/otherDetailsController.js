const Brand = require("../model/brandModel");
const StartUps = require("../model/startUpsModel");
const { uploadFile } = require("../utils/cloudinary");


const addBrand = async(req,res)=>{
    const {brand_name} = req.body
    try {

        if (!req.file) {
            return res.status(400).json({ error: 'No image file uploaded.' });
        }

        const uploadImage = await uploadFile(req.file)
        console.log("Cloudinary Upload Result:", uploadImage);

        const brand_logo = uploadImage;

        const brandData = new Brand({brand_name, brand_logo});

        const saveBrandData = await brandData.save();
        console.log('New Brand Added:', saveBrandData);

        res.status(201).json(saveBrandData);

    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({error : error.message})
    }
}


const getBrand = async(req,res)=>{
    try {
        const brandData = await Brand.find();
        res.status(200).json(brandData)
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({error : error.message})
    }
}

const deleteBrand = async (req, res) => {
    try {
        const id = req.params.id ;

        const userData = await Brand.findById(id);
        if(!userData){
            return res.status(404).json({message : "Brand data not found"})
        }

        await Brand.findByIdAndDelete(id);
        res.status(200).json({message : "delete successfully "})
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: error.message });
    }
};


const addStartUps = async(req,res)=>{
    const {startup_name} = req.body
    try {

        if (!req.file) {
            return res.status(400).json({ error: 'No image file uploaded.' });
        }

        const uploadImage = await uploadFile(req.file)
        console.log("Cloudinary Upload Result:", uploadImage);

        const startup_logo = uploadImage;

        const startUpsData = new StartUps({startup_name, startup_logo});

        const saveStartUpsData = await startUpsData.save();
        console.log('New StartUps Added:', saveStartUpsData);

        res.status(201).json(saveStartUpsData);

    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({error : error.message})
    }
}


const getStartUps = async(req,res)=>{
    try {
        const startUpsData = await StartUps.find();
        res.status(200).json(startUpsData)
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({error : error.message})
    }
}

const deleteStartUps = async (req, res) => {
    try {
        const id = req.params.id ;

        const userData = await StartUps.findById(id);
        if(!userData){
            return res.status(404).json({message : "StartUps data not found"})
        }

        await StartUps.findByIdAndDelete(id);
        res.status(200).json({message : "delete successfully "})
    } catch (error) {
      console.error("Error: ", error);
      res.status(500).json({ error: error.message });
    }
};


module.exports = {
    addBrand,
    getBrand,
    deleteBrand,
    addStartUps,
    getStartUps,
    deleteStartUps,
}