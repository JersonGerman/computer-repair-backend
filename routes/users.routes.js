const espress = require('express');

// Middlewares
const {
  userExists,
  emailExists,
  userIsInactive,
} = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validationsUsers.middlewares');

// Controller
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

const router = espress.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, emailExists, createUser);
router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(userIsInactive, deleteUser);

module.exports = { usersRouter: router };
