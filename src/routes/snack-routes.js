'use strict';

const express = require('express');

const snackSchema = require('../models/snack-schema.js');
const Snack = require('../models/generic-collection.js');
const snack = new Snack(snackSchema);

const snackRouter = express.Router();

// RESTful routes

snackRouter.get('/snack', getSnack);
snackRouter.get('/snack/:id', getOneSnack);
snackRouter.post('/snack', createSnack)
snackRouter.put('/snack/:id', updateSnack);
snackRouter.delete('/snack/:id', deleteSnack);

// RESTful route handlers

async function getSnack(req, res) {
  let getAllSnack = await snack.read();
  res.status(200).json(getAllSnack);
}

async function getOneSnack(req, res) {
  const id = req.params.id;
  let theSnack = await snack.read(id);
  res.status(200).json(theSnack);
}

async function createSnack(req, res) {
  let content = req.body;
  let createdSnack = await snack.create(content);
  res.status(201).json(createdSnack);
}

async function updateSnack(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedSnack = await snack.update( id, data );
  res.status(200).json(updatedSnack);
}

async function deleteSnack(req, res) {
  const id = req.params.id;
  let deletedSnack = await snack.delete( id );
  res.status(200).json({deletedSnack});
}

module.exports = snackRouter;