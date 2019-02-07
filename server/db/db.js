const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

// MAKE DB FUNCTIONS!
function getIslands() {
    return db('islands').select()
}

module.exports = {
    getIslands
} 