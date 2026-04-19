const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

name:String,
phone:String,
village:String,
password:String,
language:String

})

module.exports = mongoose.model("User", userSchema)