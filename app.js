const express = require('express');
const dotenv = require('dotenv');

// init express
const app = express();

// import config infos
dotenv.config({
  path: './config/config.env',
});

// setup PORT
const PORT = process.env.PORT || 5000;

// app running: listening port and mode
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
