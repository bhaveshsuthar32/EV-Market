const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');


const { signAdmin, loginAdmin, getAdmin } = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const { addTwoDetails, getTwoDetails } = require('../controllers/wheelerController');
const {addBrand, getBrand, addStartUps, getStartUps} = require("../controllers/otherDetailsController")

router.post("/admin/sign", signAdmin)
router.post("/admin/login", loginAdmin)
router.get("/admin/getAdmin", authenticateToken, getAdmin)
router.post("/admin/addTwoWheeler",upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
  ]), addTwoDetails)
router.get("/admin/getTwoWheeler",  getTwoDetails)

router.post("/admin/addBrand", upload.single("brand_logo"), addBrand )
router.get("/admin/getBrand", getBrand )

router.post("/admin/addStartUps", upload.single("startup_logo"), addStartUps )
router.get("/admin/getStartUps", getStartUps )


// export default router ;
module.exports = router;