const express = require("express");

process.on("unhandledRejection",(err)=>{
  console.log("Error server: ",err)
})
process.on("uncaughtException", err =>{
  console.log(("Error server: ",err));
})

// Router
const { usersRouter } = require("./routes/users.routes");
const { repairsRouter } = require("./routes/repairs.routes");

// Util
const { db } = require("./utils/database");
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoint User
app.use("/api/v1/users", usersRouter);

app.use("/api/v1/repairs", repairsRouter);

// En proceso de mejorar
app.use(function(err, req, res, next) {
  // console.error(err.stack);
  res.status(400).send({message:"Syntax error"});
});



// Authenticate with the database
db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log("error: ", err));

// Sync models with database
// db.sync({force:true})  // force:true => reinicia la base de datos => uso en desarrollo
db.sync()
  .then(() => console.log("Database sync"))
  .catch((err) => console.log("error sync: ", err));

// Run server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
