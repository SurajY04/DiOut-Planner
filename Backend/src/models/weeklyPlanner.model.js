const mongoose = require('mongoose')

const diet = new mongoose.Schema({
    mealType: {
        type: String,
        enum: ["Breakfast", "Lunch", "Snack", "Dinner"],
        required: true
    },
    meal: [{
        type: String,
        required: true
    }]
})

const macros = new mongoose.Schema({
    protein : {
        type : String ,
        required : true
    },
    carbs : {
        type : String ,
        required : true
    } ,
    fat : {
        type : String ,
        required : true
    } ,
    kcal : {
        type : String ,
        required : true
    } 
})

const workout = new mongoose.Schema({
    muscleFocus: {
        type: String,
        enum: ["Upper Body", "Lower Body", "Abs"],
        required: true
    },
    excercise: [{
        type: String,
        required: true
    }]
})

const weeklyPlannerSchema = new mongoose.Schema({
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    goal: {
        type: String,
        enum: ["Weight Gain", "Weight Loss"],
        required: true
    },
    isLactoseIntolerent: {
        type: Boolean,
        default: false,
        required: true
    },
    isVegetarian: {
        type: Boolean,
        default: false,
        required: true
    },
    weeklyPlan: [{
        day: {
            type: String,
            required: true
        },
        diet: [diet],
        macros: [macros],
        workout: [workout]
    }]
}, {
    timestamps: true
})


const weeklyPlannerModel = mongoose.model("WeeklyPlanner", weeklyPlannerSchema)

module.exports = weeklyPlannerModel;