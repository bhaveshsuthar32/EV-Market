const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');


const { signAdmin, loginAdmin, getAdmin, logoutAdmin } = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const { addTwoDetails, getTwoDetails, getBikeData, getBikeUpcoming, getBikeUsed, getTwoDataById } = require('../controllers/wheelerController');
const {addBrand, getBrand, addStartUps, getStartUps} = require("../controllers/otherDetailsController")

router.post("/admin/sign", signAdmin)
router.post("/admin/login", loginAdmin)
router.post("/admin/logout", logoutAdmin)

router.get("/admin/getAdmin", authenticateToken, getAdmin)
router.post("/admin/addTwoWheeler",upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
  ]), addTwoDetails)
router.get("/admin/getTwoWheeler",  getTwoDetails)
router.get("/admin/getTwoById/:id",getTwoDataById)

router.post("/admin/addBrand", upload.single("brand_logo"), addBrand )
router.get("/admin/getBrand", getBrand )

router.post("/admin/addStartUps", upload.single("startup_logo"), addStartUps )
router.get("/admin/getStartUps", getStartUps )

router.get("/getBikeData", getBikeData);
router.get("/getBikeUpcoming", getBikeUpcoming);
router.get("/getBikeUsed", getBikeUsed);

// export default router ;
module.exports = router;