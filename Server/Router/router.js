const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');


// const { signAdmin, loginAdmin, getAdmin, logoutAdmin } = require('../controllers/adminController');
// const { addTwoDetails, getTwoDetails, getBikeData, getBikeUpcoming, getBikeUsed, getTwoDataById, deleteTwoDetails, getScooterData, getScooterUpcoming, getScooterUsed } = require('../controllers/wheelerController');
// const {addBrand, getBrand, addStartUps, getStartUps} = require("../controllers/otherDetailsController")

const adminApi = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const twoWheeler = require('../controllers/wheelerController');
const otherData = require("../controllers/otherDetailsController")

router.post("/admin/sign", adminApi.signAdmin)
router.post("/admin/login", adminApi.loginAdmin)
router.post("/admin/logout", adminApi.logoutAdmin)

router.get("/admin/getAdmin", authenticateToken, adminApi.getAdmin)
router.post("/admin/addTwoWheeler",upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
  ]), twoWheeler.addTwoDetails)
router.get("/admin/getTwoWheeler",  twoWheeler.getTwoDetails)
router.get("/admin/getTwoById/:id",twoWheeler.getTwoDataById)
router.delete("/admin/deleteTwoWheeler/:id", twoWheeler.deleteTwoDetails)

router.post("/admin/addBrand", upload.single("brand_logo"), otherData.addBrand )
router.get("/admin/getBrand", otherData.getBrand )

router.post("/admin/addStartUps", upload.single("startup_logo"), otherData.addStartUps )
router.get("/admin/getStartUps", otherData.getStartUps )

router.get("/getBikeData", twoWheeler.getBikeData);
router.get("/getBikeUpcoming", twoWheeler.getBikeUpcoming);
router.get("/getBikeUsed", twoWheeler.getBikeUsed);

router.get("/getScooterData", twoWheeler.getScooterData);
router.get("/getScooterUpcoming", twoWheeler.getScooterUpcoming);
router.get("/getScooterUsed", twoWheeler.getScooterUsed);

// export default router ;
module.exports = router;