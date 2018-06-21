const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
    googleId: String,
    userName: String,
    password: String,
    age: Number,
    height: Number
});

const Users = mongoose.model('user', user);

module.exports = Users;