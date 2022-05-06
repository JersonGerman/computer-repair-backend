const express = require('express');

process.on('unhandledRejection', err => {
  console.log('Error server: ', err);
});
process.on('uncaughtException', err => {
  console.log(('Error server: ', err));
});

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Router
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoint User
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

// Global error handler
app.use('*', globalErrorHandler);

// En proceso de mejorar
// app.use(function (err, req, res, next) {
//   // console.error(err.stack);
//   res.status(400).send({ message: 'Syntax error' });
// });

module.exports = { app };
