const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getWalls() {
    return db('walls').select()
}

module.exports = {
    getWalls
}