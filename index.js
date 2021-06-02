const express = require("express");
const database = require("./databaseSettings");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require("./Routers/auth.router"));
app.use("/tasks", require("./Routers/tasks.router"));
app.use("/backlog", require("./Routers/backlog.router"));

const PORT = port = process.env.PORT || 500;

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port...${PORT}`)
    ); // run the server
    database
        .authenticate()
        .then(() => console.log("Database OK"))// connect to db

  } catch (err) {
  }
}
start();
