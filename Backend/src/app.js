const express = require('express')
const planRoute = require('./routes/Planner.routes')
const authRoute = require('./routes/Auth.routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : ["https://di-out-planner.vercel.app" ,
            "http://localhost:5173" ] ,
    credentials : true
}))

app.use("/api/auth" , authRoute )
app.use("/api/plan" , planRoute)


module.exports = app;