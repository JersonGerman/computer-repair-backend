const express = require("express");

// Controllers
const {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  cancelRepair,
} = require("../controllers/repairs.controller");

const router = express.Router();

router.get("/", getAllRepairs);
router.get("/:id", getRepairById);
router.post("/", createRepairs);
router.patch("/:id", updateRepair);
router.delete("/:id", cancelRepair);

module.exports = { repairsRouter: router };
