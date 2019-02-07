const path = require('path')
const express = require('express')


const server = express()

const dbConnectionTest = require('./db/islands')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get("/API/island",(req,res)=>{
    
    dbConnectionTest.getIslands()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})



module.exports = server


