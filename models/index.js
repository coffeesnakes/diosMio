const UserModel = require('../database/index.js');

module.exports = {
  createUser: (data, cb) => {
    UserModel.create(data, (err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(err, docs);
      }
    });
  },

  getUser: (query, cb) => {
    UserModel.find(query, (err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(err, docs);
      }
    });
  },