const express = require("express");
const database = require("./databaseSettings");
const config = require("./config/default.json");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require("./Routers/auth.router"));
app.use("/tasks", require("./Routers/tasks.router"));
const PORT = config.port || 5000;

async function start() {
  try {
    database
      .authenticate()
      .then(() => console.log("Database OK")) // connect to db

    app.listen(5000, () =>
      console.log(`App has been started on port...${PORT}`)
    ); // run the server
  } catch (err) {
    console.log("Server errno", err.name);
  }
}
start();
