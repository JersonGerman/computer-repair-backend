const express = require('express');

// Middlewares
const {
  repairExists,
  userIdExists,
  repairPendingExists,
} = require('../middlewares/repairs.middlewares');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validationsRepairs.middlewares');
// Controllers
const {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  cancelRepair,
} = require('../controllers/repairs.controller');

const router = express.Router();

// router.get("/", getAllRepairs);
// router.post("/", createRepairs);
// router.get("/:id", getRepairById);
// router.patch("/:id", updateRepair);
// router.delete("/:id", cancelRepair);
router
  .route('/')
  .get(getAllRepairs)
  .post(createRepairValidations, checkValidations, userIdExists, createRepairs);

router
  .use('/:id', repairExists)
  .route('/:id')
  .get(getRepairById)
  .patch(repairPendingExists, updateRepair)
  .delete(repairPendingExists, cancelRepair);

module.exports = { repairsRouter: router };
