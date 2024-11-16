require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadFile = async (file) => {
  try {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }
      );

      uploadStream.end(file.buffer);
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

// const uploadFile = async (file) => {
//     try {
//       const result = await cloudinary.uploader.upload(file.buffer, {
//         resource_type: "auto",
//       });
//       console.log(result.secure_url);
//       return result.secure_url;
//     } catch (error) {
//       console.error("Error uploading to Cloudinary:", error);
//       throw error;
//     }
//   };
  

// const deleteFile = async (publicId) => {
//   try {
//     const result = await cloudinary.uploader.destroy(publicId);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };

module.exports = {
  uploadFile,
//   deleteFile,
};
