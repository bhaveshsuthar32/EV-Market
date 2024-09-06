const express = require('express');
const router = express.Router();


const { signAdmin, loginAdmin, getAdmin } = require('../controller/userCont');


router.post("/Admin/sign", signAdmin)
router.post("/Admin/login", loginAdmin)
router.get("/Admin/getAdmin", getAdmin)


// export default router ;
module.exports = router;