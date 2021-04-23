'use strict';

require('@code-fellows/supergoose');

const GenericCollection = require ('../src/models/generic-collection.js');
const foodModel = require('../src/models/food-schema.js');
const food = new GenericCollection(foodModel);

describe('Food Actions', () => {

  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
    let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
    console.log('expected', expected);
    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });

  });

  it('can read() a single food item', () => {
    let obj = { name: 'test food 2', calories: 9999, type: 'VEG' };
    let expected = { name: 'test food 2', calories: 9999, type: 'VEG' };
    
    return food.create(obj)
      .then(record => {
        return food.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
          })
      })
  });

});