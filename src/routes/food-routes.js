'use strict';

const express = require('express');

const foodSchema = require('../models/food-schema.js');
const Food = require('../models/generic-collection.js');
const food = new Food(foodSchema);

const foodRouter = express.Router();

// RESTful routes

foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood)
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

// RESTful route handlers

async function getFood(req, res) {
  let getAllFood = await food.read();
  res.status(200).json(getAllFood);
}

async function getOneFood(req, res) {
  const id = await req.params.id;
  let theFood = food.read(id);
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let content = req.body;
  let createdFood = await food.create(content);
  res.status(201).json(createdFood);
}

async function updateFood(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedFood = await food.update( id, data );
  res.status(200).json(updatedFood);
}

async function deleteFood(req, res) {
  const id = req.params.id;
  let deletedFood = await food.delete( id );
  res.status(200).json({deletedFood});
}

module.exports = foodRouter;