const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getWalls() {
    console.log('db')
    return db('walls').select()
}

module.exports = {
    getWalls
}