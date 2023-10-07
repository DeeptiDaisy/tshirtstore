const express= require('express');
const router = express.Router();

const {signup} = require("../contrrollers/userController");

router.route("/signup").post(signup);


module.exports = router;