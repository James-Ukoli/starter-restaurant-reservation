/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./table.controller");
const seatRouter = require("../seats/seat.router");

router.use("/:table_id/seat", seatRouter);

router.route("/").get(controller.list).post(controller.create);

module.exports = router;
