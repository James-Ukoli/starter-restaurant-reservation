const { destroy } = require("../db/connection");
const knex = require("../db/connection");

function list(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .orderBy("reservations.reservation_time");
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
  return knex("posts").where({ reservation_id: reservationId }).del();
}

module.exports = {
  list,
  create,
  read,
  delete: destroy,
};
