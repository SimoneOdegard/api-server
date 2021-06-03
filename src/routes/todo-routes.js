'use strict';

const express = require('express');

const todoSchema = require('../models/todo-schema.js');
const Todo = require('../models/generic-collection.js');
const todo = new Todo(todoSchema);

const todoRouter = express.Router();

// RESTful routes

todoRouter.get('/todo', getTodo);
todoRouter.get('/todo/:id', getOneTodo);
todoRouter.post('/todo', createTodo)
todoRouter.put('/todo/:id', updateTodo);
todoRouter.delete('/todo/:id', deleteTodo);

// RESTful route handlers

async function getTodo(req, res) {
  let getAllTodo = await todo.read();
  res.status(200).json(getAllTodo);
}

async function getOneTodo(req, res) {
  const id = req.params.id;
  let theTodo = await todo.read(id);
  res.status(200).json(theTodo);
}

async function createTodo(req, res) {
  let content = req.body;
  let createdTodo = await todo.create(content);
  res.status(201).json(createdTodo);
}

async function updateTodo(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedTodo = await todo.update( id, data );
  res.status(200).json(updatedTodo);
}

async function deleteTodo(req, res) {
  const id = req.params.id;
  let deletedTodo = await todo.delete( id );
  res.status(200).json({deletedTodo});
}

module.exports = todoRouter;