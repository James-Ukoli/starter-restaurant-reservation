const knex = require("../db/connection");

function list() {
  return knex("tables").select("*").orderBy("table_name");
}

function create(newTable) {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then((newTables) => newTables[0]);
}

function read(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

module.exports = {
  list,
  create,
  read,
};
