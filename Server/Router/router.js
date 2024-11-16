const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');


const { signAdmin, loginAdmin, getAdmin } = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const { addTwoDetails, getTwoDetails } = require('../controllers/wheelerController');


router.post("/admin/sign", signAdmin)
router.post("/admin/login", loginAdmin)
router.get("/admin/getAdmin", authenticateToken, getAdmin)
router.post("/admin/addTwoWheeler",upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
  ]), addTwoDetails)
router.get("/admin/getTwoWheeler",  getTwoDetails)

// export default router ;
module.exports = router;