const { GoogleGenAI } = require('@google/genai')


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

const plannerSchema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            day: { type: "String" },
            diet: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        mealType: { type: "String", enum: ["Breakfast", "Lunch", "Snack", "Dinner"] },
                        meal: { type: "array", items: { type: "String" }, minItems: 2 },
                    },
                    required: ["mealType", "meal"]
                }
            },
            macros: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        protein: { type: "String" },
                        carbs: { type: "String" },
                        fat: { type: "String" },
                        kcal: { type: "String" }
                    },
                    required: ["protein", "carbs", "fat", "kcal"]
                }
            },
            workout: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        muscleFocus: { type: "String", enum: ["Upper Body", "Lower Body", "Abs"] },
                        excercise: { type: "array", items: { type: "String" }, minItems: 5 }
                    },
                    required: ["muscleFocus", "excercise"]

                }
            }
        }
        ,

        required: ["day", "diet", "workout", "macros"]
    }
}

async function generatePlan({ heigth, weight, gender, goal, isLactoseIntolerent, isVegetarian }) {

    const prompt = `Generate a 7 day diet and workout plan of the basis of given instruction -
                    heigth : ${heigth} ,
                    weight : ${weight} ,
                    gender : ${gender} ,
                    goal : ${goal} ,
                    isLactoseIntolerent : ${isLactoseIntolerent} ,
                    isVegetarian : ${isVegetarian}
    `

    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: plannerSchema
        }
    })

    console.log(response.text)

    return JSON.parse(response.text);
};

module.exports = generatePlan