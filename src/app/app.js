const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

var corsOptions = {
  credentials: true,
  origin: process.env.ORIGINS ? process.env.ORIGINS.split(" ") : "*",
};
console.log("[App] cors options: ", corsOptions);

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

/**
 * registering routes
 * this should be last in importing modules
 */
require("../routes")(app);

module.exports = app;
