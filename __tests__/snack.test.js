'use strict';

require('@code-fellows/supergoose');


const GenericCollection = require ('../src/models/generic-collection.js');
const Snack = require('../src/models/snack-schema.js');
const food = new GenericCollection(Snack);

describe('Snack Actions', () => {

  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 9999, type: 'COOKIE' };
    let expected = { name: 'test food 1', calories: 9999, type: 'COOKIE' };

    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });

  });

  it('can read() a single food item', () => {
    let obj = { name: 'test food 2', calories: 9999, type: 'CHIP' };
    let expected = { name: 'test food 2', calories: 9999, type: 'CHIP' };
    
    return food.create(obj)
      .then(record => {
        return food.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
          })
      })
  });

});