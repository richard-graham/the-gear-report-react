const path = require('path')
const express = require('express')


const server = express()

const islandDb = require('./db/islands')
const regionDb = require('./db/regions')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get("/API/island",(req,res)=>{
    
    islandDb.getIslands()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/region",(req,res)=>{
    
    regionDb.getRegions()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/areas",(req,res)=>{
    
    areaDb.getAreas()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

module.exports = server


