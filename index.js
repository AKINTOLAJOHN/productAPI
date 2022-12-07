const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
const cloudinary = require('cloudinary')
const fs = require('fs')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const userRouter = require('./routes/routes')

app.use('/api', userRouter)

require('dotenv').config()


const PORT = process.env.PORT || 8000
// database 
const URL = process.env.MONGO_URL


mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology: true}).then(()=>{
    console.log(`database connected`)
}).catch((err)=>{
    console.log(`check your network`)
})
//  cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_APIKEY,
    api_secret : process.env.CLOUD_APISECRET
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Started at ${PORT}`)
})


