// import modules

import express from 'express'

import { students } from './data/student-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)

// mount routes
// app.get('/', function(req, res) {
//   res.send('<h1>hello, friend</h1>')
// })

app.get('/home', function(req, res){
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})

app.get('/', function(req, res){
  res.redirect('/home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})