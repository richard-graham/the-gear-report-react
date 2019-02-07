const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getIslands() {
    console.log('get islands function in db')
    return db('islands').select()
}

module.exports = {
    getIslands
}