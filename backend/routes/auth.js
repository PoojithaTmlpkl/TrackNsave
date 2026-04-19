const express = require("express")
const router = express.Router()

const User = require("../models/User")

// REGISTER
router.post("/register", async (req,res)=>{

try{

console.log("Register request body:", req.body)

const user = new User(req.body)

const savedUser = await user.save()

console.log("Saved user:", savedUser)

res.json({
success:true,
message:"User registered"
})

}catch(err){

console.log("Register error:", err)

res.json({
success:false,
message:"Registration error"
})

}

})


// LOGIN
router.post("/login", async (req,res)=>{

const {phone,password} = req.body

const user = await User.findOne({
phone:phone,
password:password
})

if(user){

res.json({
success:true,
user:user
})

}else{

res.json({
success:false,
message:"Invalid phone or password"
})

}

})

module.exports = router