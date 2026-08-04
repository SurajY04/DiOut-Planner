const express = require('express')
const weeklyPlan = require('../controllers/weeklyPlanner.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();

router.post("/create-plan" , authMiddleware.loginVerify , weeklyPlan.createPlan)
router.get("/get-plan/:id" , authMiddleware.loginVerify , weeklyPlan.getPlan)

module.exports = router;