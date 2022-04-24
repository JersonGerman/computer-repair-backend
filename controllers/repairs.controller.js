const { Repairs } = require("../models/repairs.model");
const { handleErrors } = require("../utils/errors");

const getAllRepairs = async (req, res) => {
  const repairs = await Repairs.findAll();

  res.status(200).json({
    repairs,
  });
};

const createRepairs = async (req, res) => {
  const { date, userId } = req.body;

  try {
    const newRepair = await Repairs.create({ date, userId });
    res.status(201).json({ newRepair });
  } catch (error) {
    res.status(400).json(handleErrors(error));
  }
};

const getRepairById = async (req, res) => {
  const id = req.params.id;
  const repair = await Repairs.findByPk(id);
  if (repair === null) {
    res.status(404).json({
      statusCode: 404,
      repair,
      message: "Not Found",
    });
  } else {
    res.status(200).json({ repair });
  }
};

const updateRepair = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const updatedUser = await Repairs.update(
    { status },
    {
      where: {
        id,
      },
    }
  );
  if (updatedUser[0] === 0) {
    res.status(404).json({
      statusCode: 404,
      message: "Not Found",
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      message: "Updated repair",
    });
  }
};

const cancelRepair = async (req, res) => {
  const id = req.params.id;
  const repairCanceled = await Repairs.update(
    {
      status: "Cancelled",
    },
    {
      where: {
        id,
      },
    }
  );
  if (repairCanceled[0] === 0) {
    res.status(404).json({
      statusCode: 404,
      message: "Not Found",
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      message: "Repair canceled",
    });
  }
};
module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  cancelRepair,
};
