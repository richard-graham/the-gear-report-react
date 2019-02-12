const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getTickets() {
    return db('tickets').select().orderBy('created_at', 'desc')
}

function addTicket(ticket) {
    console.log(ticket)
    return db('tickets').insert(ticket)
}

module.exports = {
    getTickets,
    addTicket
}