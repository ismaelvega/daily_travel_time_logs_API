const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const logRoutes = require("./routes/log");
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use("/api", logRoutes);

app.listen(port, () => console.log("Running in port", port));

// routes
app.get("/", (req, res) => res.send("hello world"));

// DB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

module.exports = app;
