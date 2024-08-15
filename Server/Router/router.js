const express = require('express');
const router = express.Router();


const { signAdmin } = require('../controller/userCont');



router.post("/Admin/sign", signAdmin)


// export default router ;
module.exports = router;