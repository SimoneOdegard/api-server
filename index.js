'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config();

server.start(PORT);

const mongoose = require('mongoose');
// const GenericCollection = require('./models/generic-collection.js');
// const food = new GenericCollection();

const MONGODB_URI = process.env.MONGODB_URI;

const options = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(MONGODB_URI, options);

/* ========== dummy code ========== */
// const databaseInteractions = async () => {
//   let pizza = {
//     name: 'pizza',
//     calories: 1200,
//     type: 'VEG'
//   }
  
//   let apple = {
//     name: 'apple',
//     calories: 30,
//     type: 'FRUIT'
//   }

//   let newFood = await food.create(pizza);
//   let moreFood = await food.create(apple);

//   console.log('create:', newFood);

//   let oneFood = await food.read(newFood._id);
//   console.log('get one food item', oneFood);

//   let allFoods = await food.read();
//   console.log(allFoods);
// }

// databaseInteractions();

/* ========== dummy code ========== */