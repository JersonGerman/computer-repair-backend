const { User } = require('../models/user.model');

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return next(new AppError('User not found given that id', 404));
  }
  req.user = user;
  next();
});

const emailExists = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return next(new AppError('This email already exists', 404));
  }
  next();
});

const userIsInactive = catchAsync(async (req, res, next) => {
  const { status } = req.user;
  if (status === 'Unavailable') {
    return next(new AppError('This user is already inactive', 404));
  }
  next();
});

module.exports = {
  userExists,
  emailExists,
  userIsInactive,
};
