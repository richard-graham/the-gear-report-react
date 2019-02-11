const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getClimbs() {
    return db('routes').select()
}

module.exports = {
    getClimbs
}