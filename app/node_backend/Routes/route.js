const express = require("express");
const router = express.Router();
// const { login } = require("../controllers/adminController.js"); // ✅ Destructure the function
const { getTwoWheeler } = require("../controllers/twoWheeler.js");

// router.post("/login", login);             // ✅ Now this is a real function
router.get("/two-wheeler", getTwoWheeler);

module.exports = router;
