const express = require('express');
const router = express.Router();


const { signAdmin, loginAdmin, getAdmin } = require('../controller/adminController');
const authenticateToken = require('../middleware/authMiddleware');
const { addTwoDetails, getTwoDetails } = require('../controller/wheelerController');


router.post("/Admin/sign", signAdmin)
router.post("/Admin/login", loginAdmin)
router.get("/Admin/getAdmin", authenticateToken, getAdmin)
router.post("/Admin/addTwoWheeler", addTwoDetails)
router.get("/Admin/getTwoWheeler", getTwoDetails)

// export default router ;
module.exports = router;