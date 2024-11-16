const Brand = require("../model/brandModel");
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

module.exports = {
    addBrand,
    getBrand,
}