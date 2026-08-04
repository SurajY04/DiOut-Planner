const weeklyPlannerModel = require('../models/weeklyPlanner.model')
const generatePlan = require('../services/ai.service')

async function createPlan(req, res) {
    const { height, weight, gender, goal, isLactoseIntolerent, isVegetarian } = req.body;

    console.log(req.body);

    const plan = await generatePlan({
        heigth: height,
        weight: weight,
        gender: gender,
        goal: goal,
        isLactoseIntolerent: isLactoseIntolerent,
        isVegetarian: isVegetarian
    })

    const weeklyPlanner = await weeklyPlannerModel.create({
        height: height,
        weight: weight,
        gender: gender,
        goal: goal,
        isLactoseIntolerent: isLactoseIntolerent,
        isVegetarian: isVegetarian,
        weeklyPlan: [...plan]
    })

    return res.status(201).json({
        message: "Plan Created Successfully",
        weeklyPlanner
    })
}

async function getPlan (req , res) {
    
    const id = req.params.id;

    const plan = await weeklyPlannerModel.findById({
        _id : id
    })

    return res.status(200).json({
        message : "Plan fetched Successfully" ,
        plan : {
          weeklyPlan : plan.weeklyPlan
        }
    })
}

module.exports = { createPlan  , getPlan}