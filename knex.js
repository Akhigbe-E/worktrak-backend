//Import the knex module into the project
const knex = require('knex')


//Initialise knex
const db = new knex({
    client: "pg",
    connection: process.env.DATABASE_URL
    // connection: 'postgres://postgres:12345678910@localhost:5432/worktrak'
})

module.exports = db