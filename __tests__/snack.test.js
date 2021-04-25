'use strict';

require('@code-fellows/supergoose');


const GenericCollection = require ('../src/models/generic-collection.js');
const Snack = require('../src/models/snack-schema.js');
const snack = new GenericCollection(Snack);

describe('Snack Actions', () => {

  xit('can create() a new snack item', () => {
    let obj = { name: 'test snack 1', calories: 9999, type: 'COOKIE' };
    let expected = { name: 'test snack 1', calories: 9999, type: 'COOKIE' };

    return snack.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });

  });

  xit('can read() a single snack item', () => {
    let obj = { name: 'test snack 2', calories: 9999, type: 'CHIP' };
    let expected = { name: 'test snack 2', calories: 9999, type: 'CHIP' };
    
    return snack.create(obj)
      .then(record => {
        return snack.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
          })
      })
  });

});