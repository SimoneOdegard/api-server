'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true},
  displayName: { type: String, required: true},
  description: { type: String, required: true},
});

const categoriesModel = mongoose.model('categories', categoriesSchema);

module.exports = categoriesModel;