const { Repairs } = require('../models/repairs.model');
const { User } = require('../models/user.model');

const { catchAsync } = require('../utils/catchAsync');

const getAllRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repairs.findAll({
    include: [{ model: User }],
  });

  res.status(200).json({
    repairs,
  });
});

const createRepairs = catchAsync(async (req, res, next) => {
  const { date, computerNumber, comments, userId } = req.body;

  const newRepair = await Repairs.create({
    date,
    computerNumber,
    comments,
    userId,
  });
  res.status(201).json({ newRepair });
});

const getRepairById = catchAsync(async (req, res, next) => {
  const { repair } = req;
  res.status(200).json({ repair });
});

const updateRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;
  // const { status } = req.body;
  await repair.update({ status: 'completed' });

  res.status(200).json({ status: 'success' });
});

const cancelRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;
  await repair.update({ status: 'Cancelled' });
  res.status(200).json({ status: 'success' });
});

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairById,
  updateRepair,
  cancelRepair,
};
