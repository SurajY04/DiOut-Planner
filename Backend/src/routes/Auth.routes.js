const express = require('express')
const authController = require("../controllers/auth.controller")
const autMiddleware = require('../middlewares/auth.middleware')


const router = express.Router();

router.post("/" , authController.RegisterUser)
router.post("/login"  ,authController.loginUser)
router.get("/get-me" , autMiddleware.loginVerify , authController.getMe)

module.exports = router