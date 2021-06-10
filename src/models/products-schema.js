'use strict';

const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  category: { type: String, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true},
  price: { type: String, required: true},
  inventoryCount: { type: Number, required: true},
  image: { type: String, required: true}
});

const productsModel = mongoose.model('products', productsSchema);

module.exports = productsModel;