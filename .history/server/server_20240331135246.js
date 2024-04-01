const express= require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const engagementRoutes=require('./Routes/EngagementRoutes');

const app = express();
app.use(cors());
dotenv.config()
app.use(bodyParser.json());


app.get('/',(req, res)=>{
  res.send('success')
})

app.use(engagementRoutes)

app.listen(process.env.PORT, ()=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('listening on port ' + process.env.PORT);
  }).catch(err=>console.log(err))
})