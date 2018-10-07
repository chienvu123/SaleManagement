const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
  googleId: String,
  userName: String,
  password: String,
  photo: String,
  email: String,
});

const Users = (module.exports = mongoose.model('user', user));

Users.Test = (userId, callback = (result) => {}) => {
  callback('haha');
};
