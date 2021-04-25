'use strict';

class GenericCollection {
  constructor(genSchema) {
    this.model = genSchema;
  }

  create(record) {
    let newRecord = this.model(record);
    newRecord.save();
    return newRecord
  }

  read(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true })
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection;