const mongoose = require('mongoose');

const engagementSchema = new mongoose.Schema({
  weeklySales: Number,
  newUsers: Number,
  itemOrders: Number,
  bugReports: Number,
 
});

const Engagement = mongoose.model('Engagement', engagementSchema);

module.exports = Engagement;