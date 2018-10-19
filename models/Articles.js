const mongoose = require('mongoose');
const { Schema } = mongoose;
const post = new Schema({
  _id: String,
  content: String,
  photoUrl: String,
});

const Post = (module.exports = mongoose.model('articles', post));

module.exports.Test = (callback, limit) => {
  console.log('test');
  Post.find(callback).limit(limit);
};
