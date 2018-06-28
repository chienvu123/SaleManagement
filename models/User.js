const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
    googleId: String,
    userName: String,
    password: String,
    photo: String,
    email: String
});

const Users = mongoose.model('user', user);

module.exports = Users;