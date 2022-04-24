const espress = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/users.controller");

const router = espress.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = { usersRouter: router };
