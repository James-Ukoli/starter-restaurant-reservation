const { destroy } = require("../db/connection");
const knex = require("../db/connection");

function listByDate(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .orderBy("reservations.reservation_time");
}

function list() {
  return knex("reservations").select("*");
}

function create(newReservation) {
  return knex("reservations")
    .insert(newReservation, "*")
    .then((createdReservation) => createdReservation[0]);
}

function read(Id) {
  return knex("reservations").select("*").where({ reservation_id: Id }).first();
}

function update() {}

function destory(reservationId) {
  return knex("reservations").where({ reservation_id: reservationId }).del();
}

module.exports = {
  listByDate,
  list,
  create,
  read,
  delete: destroy,
};
