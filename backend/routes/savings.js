const express = require("express")
const router = express.Router()
const Saving = require("../models/Savings")

router.post("/add", async(req,res)=>{

const saving = new Saving(req.body)
await saving.save()

res.json({message:"Saving Added"})
})

router.get("/", async(req,res)=>{

const data = await Saving.find()
res.json(data)

})

module.exports = router