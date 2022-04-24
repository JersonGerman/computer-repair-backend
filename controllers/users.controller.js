const { User } = require("../models/user.model");
const { handleErrors } = require("../utils/errors");

const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
};

const createUser = async (req, res) => {
  const { name, email, password, rol } = req.body;

  try {
    const newUser = await User.create({ name, email, password, rol });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(400).json(handleErrors(error));
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  if (user === null) {
    res.status(404).json({
      statusCode: 404,
      user,
      message: "Not Found",
    });
  } else {
    res.status(200).json({ user });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const updatedUser = await User.update(
    { name, email },
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
      message: "Updated user",
    });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const userDeleted = await User.update(
    {
      status: "Unavailable",
    },
    {
      where: {
        id,
      },
    }
  );
  if (userDeleted[0] === 0) {
    res.status(404).json({
      statusCode: 404,
      message: "Not Found",
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      message: "Disabled user",
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
