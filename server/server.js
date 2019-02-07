const path = require('path')
const express = require('express')


const server = express()

const dbConnectoinTest = require('./db/islands')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get("/API/island",(req,res)=>{
    
    dbConnectoinTest.getIslands()
    .then( (dbResponse) =>{
        res.send(dbResponse)
    })
    // res.json({data:"information"})
})



module.exports = server


