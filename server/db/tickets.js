const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getTickets() {
    return db('tickets').select().orderBy('created_at', 'desc')
}

module.exports = {
    getTickets
}