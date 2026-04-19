const mongoose = require("mongoose")

const SavingSchema = new mongoose.Schema({
title:String,
amount:Number,
date:Date
})

module.exports = mongoose.model("Saving",SavingSchema)