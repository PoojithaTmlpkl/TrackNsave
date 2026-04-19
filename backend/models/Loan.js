const mongoose = require("mongoose")

const LoanSchema = new mongoose.Schema({
title:String,
amount:Number,
date:Date
})

module.exports = mongoose.model("Loan",LoanSchema)