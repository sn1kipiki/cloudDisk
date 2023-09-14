const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")


const router = new Router()

router.post("/registration", [
        check("email", "Uncorrect email").isEmail(),
        check("password", "Password must be longer than 8 ").isLength({min:8}),
    ],
     async (req, res) =>{
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message:"Uncorrect request", errors})
        }

        const {email, username, password} = req.body

        const candidateEmail = await User.findOne({email})
        if(candidateEmail){
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const candidateUsername = await User.findOne({username})
        if(candidateUsername){
            return res.status(400).json({message: `User with username ${username} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, username, password: hashPassword})
        await user.save()
        return res.json({message:"User was created"})
    } catch (error) {
        console.log(error)
        res.send({messsge: "Server error"})
    }
})
router.post("/login", 
 async (req, res) =>{
try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    const isPassValid = bcrypt.compareSync(password, user.password)
    if(!isPassValid){
        return res.status(400).json({message: "Invalid password"})
    }

    const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
    return res.json({
        token, 
        user:{
            id: user.id,
            email: user.email,
            username: user.username,
            diskSpace: user.diskSpace,
            usedSpace: user.usedSpace,
            avatar: user.avatar

        }
    })
} catch (error) {
    console.log(error)
    res.send({messsge: "Server error"})
}
})
module.exports = router