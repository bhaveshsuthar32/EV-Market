const twoWheeler = require("../models/twoModel");

const getTwoWheeler = async (req, res) => {
  try {
    const getUser = await twoWheeler.find();
    res.status(200).json({
      message: "Data fetched successfully",
      data: getUser,
    });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  getTwoWheeler,
};
