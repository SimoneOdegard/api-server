'use strict';

const express = require('express');

const categoriesSchema = require('../models/categories-schema.js');
const Categories = require('../models/generic-collection.js');
const categories = new Categories(categoriesSchema);

const categoriesRouter = express.Router();

// RESTful routes

categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getOneCategories);
categoriesRouter.post('/categories', createCategories)
categoriesRouter.put('/categories/:id', updateCategories);
categoriesRouter.delete('/categories/:id', deleteCategories);

// RESTful route handlers

async function getCategories(req, res) {
  let getAllCategories = await categories.read();
  res.status(200).json(getAllCategories);
}

async function getOneCategories(req, res) {
  const id = req.params.id;
  let theCategories = await categories.read(id);
  res.status(200).json(theCategories);
}

async function createCategories(req, res) {
  let content = req.body;
  let createdCategories = await categories.create(content);
  res.status(201).json(createdCategories);
}

async function updateCategories(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedCategories = await categories.update( id, data );
  res.status(200).json(updatedCategories);
}

async function deleteCategories(req, res) {
  const id = req.params.id;
  let deletedCategories = await categories.delete( id );
  res.status(200).json({deletedCategories});
}

module.exports = categoriesRouter;