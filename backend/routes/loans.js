const express = require("express")
const router = express.Router()
const Loan = require("../models/Loan")

router.post("/add", async(req,res)=>{

const loan = new Loan(req.body)
await loan.save()

res.json({message:"Loan Added"})
})

router.get("/", async(req,res)=>{

const data = await Loan.find()
res.json(data)

})

module.exports = router