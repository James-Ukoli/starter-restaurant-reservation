const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./table.service");

function ValidFields(req, res, next) {
  const { data = {} } = req.body;
  const validFields = newSet([
    "table_id",
    "table_name",
    "capacity",
    "status",
    "reservation_id",
    "created_at",
    "updated_at",
  ]);

  const invalidFields = Object.keys(data).filter(
    (field) => !validFields.has(field)
  );

  if (invalidFields.length > 0)
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  next();
}

function hasTableId(req, res, next) {
  const table = req.params.table_id || req.body?.data?.table_id;

  if (reservation) {
    res.locals.table_id = table;
    next();
  } else {
    next({
      status: 400,
      message: `missing table_id`,
    });
  }
}

function capacityCheck(req, res, next) {
  const { data = {} } = req.body;
  if (data.capacity < 1)
    return next({
      status: 400,
      message: "Our tables only have a capacity of 1 or 6.",
    });
  return next();
}

function tableNameCheck(req, res, next) {
  const { data = {} } = req.body;
  // const tableValidNames = new Set(["Bar #1", "Bar #2", "#1", "#2"]);
  // const invalidFields = Object.keys(tableValidNames).filter(
  //   (field) => !data.table_name.has(tableValidNames)
  // );
  // if (invalidFields.length > 0) {
  //   return next({
  //     status: 400,
  //     message: "That is not a valid table_name.",
  //   });
  // }
  if (data.table_name < 2)
    return next({
      status: 400,
      message: `Your table name ${data.table_name} is too short. It must be 2 charatcers long at least`,
    });
  next();
}

async function list(req, res, next) {
  const data = await service.list();
  res.json({ data: data });
}

async function create(req, res, next) {
  const newTableData = await service.create(req.body.data);
  res.status(201).json({ data: newTableData });
}

function read() {}

function update() {}

function destory() {}

module.exports = {
  list,
  create,
  read,
  update,
};

//// eating snack @6:40
