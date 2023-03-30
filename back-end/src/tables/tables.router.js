/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./table.controller");

router.route("/").get(controller.list).post(controller.create);

router.route("/:table_id").get(controller.read).put(controller.update);

module.exports = router;
