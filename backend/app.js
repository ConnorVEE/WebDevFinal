const express = require('express')
const app = express()

const mongoose = require('mongoose');
const taskModel = require("../models/task");

mongoose.connect('mongodb+srv://PatrickStar:ThisIsAHospital@cluster0.ya50kkp.mongodb.net/node-angular?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to database')
})
.catch(() => {
  console.log('Connection error')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/info',(req,res,next)=>{
const info = new taskModel({
  text: req.body.text,
  day: req.body.day,
  reminder: req.body.reminder
})

})




module.exports = app;

