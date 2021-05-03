const knex = require("knex");
const config = require("../knexfile")[process.env.NODE_ENV !== "production" ? "development" : "production"];

const db = knex(config);

module.exports = db;
