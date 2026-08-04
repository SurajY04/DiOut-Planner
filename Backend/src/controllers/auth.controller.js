const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function RegisterUser(req, res) {
    const { username, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        res.status(200).json({
            message: "User Already Exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        email,
        username,
        password: hash
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRETS)

    res.cookie("token", token)

    return res.status(201).json({
        message: "User Registerd Successfully",
        user: {
            email,
            username
        }
    })


}


async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    const passowrdVerify = user.comparePassword(password)

    if (!passowrdVerify) {
        res.status(403).json({
            message: "Invalid Password ! ! !"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRETS)

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,      // HTTPS only
        sameSite: "none",  // Required for different domains
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
        message: "User Logged Successfully",
        user: {
            email,
            username: user.username
        }
    })

}

async function getMe(req, res) {

    return res.status(200).json({
        authenticated: true
    })

}


module.exports = { RegisterUser, loginUser, getMe }