const { body, validationResult } = require('express-validator');

const createRepairValidations = [
  body('date')
    .notEmpty()
    .withMessage('Date cannot be empty')
    .isDate()
    .withMessage('Invalid date'),
  body('computerNumber')
    .notEmpty()
    .withMessage('ComputerNumber cannot be empty')
    .isNumeric()
    .withMessage('Must be a valid ComputerNumber'),
  body('comments').notEmpty().withMessage('comments cannot be empty'),
  body('userId')
    .notEmpty()
    .withMessage('UserId cannot be empty')
    .isNumeric()
    .withMessage('Must be a valid UserId'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);
    const errorMsg = messages.join('. ');
    return res.status(400).json({ status: 'error', message: errorMsg });
  }

  next();
};

module.exports = { createRepairValidations, checkValidations };
