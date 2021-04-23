'use strict';

const validator = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    next('error, missing name');
  }
}

// const validator = (req, res, next) => {
//   if (req.query.name) {
//   } else {
//     res.status(500).send('not found', err);
//   }
//   next();
// }

module.exports = validator;