// Models
const { User } = require('../models/user.model');

const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, rol } = req.body;
  const newUser = await User.create({ name, email, password, rol });
  res.status(201).json({ newUser });
});

const getUserById = catchAsync(async (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name } = req.body;
  await user.update({ name });
  res.status(200).json({ status: 'success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  await user.update({ status: 'Unavailable' });
  res.status(200).json({ status: 'success' });
});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
