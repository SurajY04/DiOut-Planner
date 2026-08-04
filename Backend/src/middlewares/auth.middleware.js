const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


async function loginVerify (req , res , next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token){
        return res.status(403).json({
            message : "Forbidden Access"
        })
    }

    try {
        const decode = jwt.verify(token , process.env.JWT_SECRETS)
        const user = await userModel.findById(decode.id)

        if(!user){
            return res.status(403).json({
                message : "Forbidden Access"
            })
        }

        next();
    } catch (error) {
        console.log(error)
    }
}


module.exports = {loginVerify}