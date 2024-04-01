const express = require('express');
const router = express.Router();
const Engagement = require('../Models/Engagement');

// Get all engagements
router.get('/get-engagements', async (req, res) => {
  try {
    const data = await Engagement.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create a new engagement
router.post('/engagement', async (req, res) => {
  try {
    const engagement = new Engagement(req.body);
    await engagement.save();
    res.status(201).json(engagement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit an existing engagement
router.put('/engagement/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEngagement = await Engagement.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEngagement) {
      return res.status(404).json({ message: "Engagement not found" });
    }
    res.json(updatedEngagement);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete an engagement
router.delete('/engagement/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEngagement = await Engagement.findByIdAndDelete(id);
    if (!deletedEngagement) {
      return res.status(404).json({ message: "Engagement not found" });
    }
    res.json({ message: "Engagement deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
