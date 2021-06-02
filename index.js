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

const PORT = port = process.env.PORT || 80;

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port...${PORT}`)
    ); // run the server
    database
        .authenticate()
        .then(() => console.log("Database OK")).catch(err => {
          throw new Error('Ошибка подключения')
    }) // connect to db
  } catch (err) {
  }
}
start();
