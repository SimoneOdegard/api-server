'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middleware/logger.js');
const foodRoutes = require('./routes/food-routes.js');
const snackRoutes = require('./routes/snack-routes.js');
const todoRoutes = require('./routes/todo-routes.js');
const productsRoutes = require('./routes/products-routes.js');
const categoriesRoutes = require('./routes/categories-routes.js');

const notFound = require('./error-handling/404.js');
const errors = require('./error-handling/500.js');

app.use(cors());
app.use(express.json());

app.use(logger);
app.use(foodRoutes);
app.use(snackRoutes);
app.use(todoRoutes);
app.use(productsRoutes);
app.use(categoriesRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}