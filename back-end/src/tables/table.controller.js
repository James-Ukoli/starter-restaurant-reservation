const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./table.service");

const validFieldsArray = ["table_id", "capacity"];

const validFields = ["table_name", "capacity"];

function validateFields(req, res, next) {
  const { data } = req.body;
  if (!data) {
    next({ status: 400, message: "No data entered" });
  }
  validFields.forEach((field) => {
    if (!data[field]) {
      return next({ status: 400, message: `Insert ${field} field ` });
    }
  });
  if (typeof data["capacity"] !== "number") {
    return next({
      status: 400,
      message: "capacity must be a number greater than 0",
    });
  }

  if (data["table_name"].length < 2) {
    return next({
      status: 400,
      message: "table_name must be at least two characters long.",
    });
  }

  next();
}

async function list(req, res, next) {
  const data = await service.list();
  res.json({ data: data });
}

async function create(req, res) {
  const table = req.body.data;
  const data = await service.create(table);
  console.log(data);
  res.status(201).json({ data });
}

async function updateSeatReservation(req, res) {
  const { reservation_id } = req.body.data;
  const table_id = req.params.tableId;
  const data = await service.updateSeatReservation(reservation_id, table_id);
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [validateFields, asyncErrorBoundary(create)],
  updateSeatReservation: [
    validateFields,
    asyncErrorBoundary(updateSeatReservation),
  ],
};

//// eating snack @6:40
