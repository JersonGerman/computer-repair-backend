const { app } = require('./app');

// Models
const { Repairs } = require('./models/repairs.model');
const { User } = require('./models/user.model');

// Util
const { db } = require('./utils/database');
// Authenticate with the database
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log('error: ', err));

// Establish models relations
// 1 User <-------> M Repairs
User.hasMany(Repairs);
Repairs.belongsTo(User);

// Sync models with database
// db.sync({force:true})  // force:true => reinicia la base de datos => uso en desarrollo
db.sync()
  .then(() => console.log('Database sync'))
  .catch(err => console.log('error sync: ', err));

// Run server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}!!`);
});
