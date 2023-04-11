/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./table.controller");
const seatRouter = require("../seats/seat.router");

router
  .route("/:tableId([0-9]+)/seat")
  .put(controller.updateSeatReservation)
  .all(methodNotAllowed);

router.route("/").get(controller.list).post(controller.create);

module.exports = router;
