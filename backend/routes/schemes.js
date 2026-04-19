const express = require('express');
const router = express.Router();
const Scheme = require('../models/Scheme');

// Get all schemes
router.get('/', async (req,res)=>{
  try{
    const schemes = await Scheme.find();
    res.json(schemes);
  }catch(err){ res.status(500).send(err.message); }
});

// Add scheme (admin)
router.post('/add', async (req,res)=>{
  const { title, description, eligibility } = req.body;
  try{
    const scheme = new Scheme({ title, description, eligibility });
    await scheme.save();
    res.json({ msg: "Scheme added" });
  }catch(err){ res.status(500).send(err.message); }
});

module.exports = router;