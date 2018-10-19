const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
  username: String,
  password: String,
});

const Users = (module.exports = mongoose.model('user', user));

module.exports.Test = (callback, limit) => {
  console.log('test');
  Users.find(callback).limit(limit);
};
