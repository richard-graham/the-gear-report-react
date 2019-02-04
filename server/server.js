const path = require('path')
const express = require('express')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get("/stuff",(req,res)=>{
    res.send("information")
})

module.exports = server


