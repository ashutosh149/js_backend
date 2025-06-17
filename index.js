
require('dotenv').config()
const express = require('express')

//  or
// import express from "express"

// https://www.npmjs.com/package/dotenv?activeTab=readme
// npm i dotenv



const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>welcome to login page</h1>')
})

app.get('/twitter',(req,res)=>{
    res.send('welcome to twitter page')
})

app.get('/youtube',(req,res)=>{
    res.send('<h3>my youtube channel</h3>')
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
