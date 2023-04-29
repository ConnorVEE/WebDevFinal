const express = require('express')
const app = express()

const mongoose = require('mongoose');
const taskModel = require("../models/task.js");

const bodyParser = require('body-parser')

// Connect to Database
mongoose.connect('mongodb+srv://PatrickStar:ThisIsAHospital@cluster0.ya50kkp.mongodb.net/tasks?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to database')
})
.catch(() => {
  console.log('Connection error')
})

// Use bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// disable CORS
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})

// Test get
app.get('/', (req, res) => res.send('Hello World!'))

// app.post('/info',(req,res,next)=>{
//   const info = new taskModel({
//     _id: req.body._id,
//     text: req.body.text,
//     day: req.body.day,
//     reminder: req.body.reminder
//   });
//   console.log(info);
//   res.status(201).json({
//     message: 'Post added successfully'
//   })
// })

app.get('/info', (req, res, next) => {
  taskModel.find().then(documents => {
    console.log(documents)
    res.status(200).json({
      //message:"This is fetched data",
      task:documents
    })
  })
})

app.delete( (req, res, next) => {
  taskModel.deleteOne({_id: req})
})

module.exports = app;

