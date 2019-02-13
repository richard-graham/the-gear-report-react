const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const islandDb = require('./db/islands')
const regionDb = require('./db/regions')
const areaDb = require('./db/areas')
const cragDb = require('./db/crags')
const wallDb = require('./db/walls')
const climbDb = require('./db/climbs')
const ticketDb = require('./db/tickets')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(bodyParser.json())


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

server.get("/API/area",(req,res)=>{
    
    areaDb.getAreas()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/crag",(req,res)=>{
    
    cragDb.getCrags()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/wall",(req,res)=>{
    wallDb.getWalls()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/climb",(req, res)=>{
    climbDb.getClimbs()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.get("/API/ticket",(req, res)=>{
    ticketDb.getTickets()
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.post("/API/ticket/add",(req, res)=>{
    console.log(req.body)
    ticketDb.addTicket(req.body)
    .then((dbResponse) => {
        res.send(dbResponse)
    })
})

server.put("/API/ticket/update",(req, res)=>{
    console.log(req.body)
    ticketDb.updateTicket(req.body)
    .then((dbResponse) => {
        res.json(dbResponse)
    })
})

module.exports = server


