if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const needlesRouter = require("./needles/needles.router");
const yarnRouter = require("./yarn/yarn.router");
const patternsRouter = require("./patterns/patterns.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/needles", needlesRouter);
app.use("/yarn", yarnRouter);
app.use("/patterns", patternsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
