'use strict';

const mongoose = require('mongoose');

const snackSchema = mongoose.Schema({
  name: { type: String, required: true},
  calories: { type: Number, required: true},
  type: { type: String, uppercase: true, enum: ['CHIP', 'CRACKER', 'COOKIE']}
});

const snackModel = mongoose.model('snack', snackSchema);

module.exports = snackModel;