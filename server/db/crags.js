const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getCrags() {
    return db('crags').select()
}

module.exports = {
    getCrags
}