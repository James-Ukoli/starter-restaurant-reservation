const knex = require("../db/connection");

function list() {
  return knex("tables").select("*").orderBy("table_name");
}

function create(newTable) {
  return knex("tables")
    .insert(newTable, "*")
    .then((createdReservation) => createdReservation[0]);
}

function read(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

function update() {}

function destroy(tableId) {
  return knex("tables").where({ table_id: tableId }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  destroy,
};
