const { Repairs } = require('../models/repairs.model');
const { User } = require('../models/user.model');

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const repairExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repairs.findOne({
    where: { id },
    include: { model: User },
  });
  if (!repair) {
    return next(new AppError('Repair not found given that id', 404));
  }
  req.repair = repair;
  next();
});

const userIdExists = catchAsync(async (req, res, next) => {
  const { userId } = req.body;
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    return next(new AppError('This userId does not exist', 404));
  }
  next();
});

const repairPendingExists = catchAsync(async (req, res, next) => {
  const { dataValues } = req.repair;
  if (dataValues.status !== 'pending') {
    return next(new AppError('There are no pending repairs', 404));
  }
  next();
});

module.exports = { repairExists, userIdExists, repairPendingExists };
