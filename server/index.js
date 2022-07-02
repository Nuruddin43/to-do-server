const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//   import routes
const TodoItemRoute = require("./routes/todoItems");

// connect mongodb
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

app.listen(PORT, () => console.log("server connected"));
