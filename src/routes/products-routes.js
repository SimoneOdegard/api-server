'use strict';

const express = require('express');

const productsSchema = require('../models/products-schema.js');
const Products = require('../models/generic-collection.js');
const products = new Products(productsSchema);

const productsRouter = express.Router();

// RESTful routes

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', getOneProducts);
productsRouter.post('/products', createProducts)
productsRouter.put('/products/:id', updateProducts);
productsRouter.delete('/products/:id', deleteProducts);

// RESTful route handlers

async function getProducts(req, res) {
  let getAllProducts = await products.read();
  res.status(200).json(getAllProducts);
}

async function getOneProducts(req, res) {
  const id = req.params.id;
  let theProducts = await products.read(id);
  res.status(200).json(theProducts);
}

async function createProducts(req, res) {
  let content = req.body;
  let createdProducts = await products.create(content);
  res.status(201).json(createdProducts);
}

async function updateProducts(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedProducts = await products.update( id, data );
  res.status(200).json(updatedProducts);
}

async function deleteProducts(req, res) {
  const id = req.params.id;
  let deletedProducts = await products.delete( id );
  res.status(200).json({deletedProducts});
}

module.exports = productsRouter;