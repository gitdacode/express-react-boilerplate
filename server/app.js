// inbulit modules

//installed modules
const express = require("express");
//local modules
const router = require("./routes/route");

const app = express();

// middlewares
app.use(express.json());
app.use("/api/v1", router);

module.exports = app;
