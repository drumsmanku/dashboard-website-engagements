const express= require('express');
const router =express.Router()
const Engagement=require('../Models/Engagement')


router.get('/get-engagements', async(req, res)=>{
  try{
    const data= await Engagement.find()
    res.json(data)
  }
  catch(err){
    console.log(err)
  }
})

router.post('/engagement', async (req, res) => {
  try {
    const engagement = new Engagement(req.body);
    await engagement.save();
    res.status(201).json(soldier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router