const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getRegions() {
    return db('regions').select()
}

module.exports = {
    getRegions
}