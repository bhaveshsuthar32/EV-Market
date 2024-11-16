const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');


const { signAdmin, loginAdmin, getAdmin } = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const { addTwoDetails, getTwoDetails } = require('../controllers/wheelerController');


router.post("/Admin/sign", signAdmin)
router.post("/Admin/login", loginAdmin)
router.get("/Admin/getAdmin", authenticateToken, getAdmin)
router.post("/Admin/addTwoWheeler",upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
  ]), addTwoDetails)
router.get("/Admin/getTwoWheeler",  getTwoDetails)

// export default router ;
module.exports = router;