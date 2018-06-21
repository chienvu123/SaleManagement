const mongoose = require("mongoose");
const c = 1 + 2;
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  describe: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  imageURL: {
    type: String,
    require: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Books = (module.exports = mongoose.model("Books", bookSchema));

module.exports.getBooks = (callback, limit) => {
  Books.find(callback).limit(limit);
};

module.exports.getBookById = (bookId, callback) => {
  Books.findById(bookId, callback);
};

module.exports.addBook = (book, callback) => {
  Books.create(book, callback);
};

module.exports.deleteBookById = (bookId, callback) => {
  Books.deleteOne({ _id: bookId }, callback);
};

module.exports.deleteBookByParams = (params, status, callback) => {
  const vt = params.vt;
  const vp = params.vp;
  console.log(status);
  if (status) {
    switch (vt) {
      case "title":
        Books.deleteMany({ title: vp }, callback);
        break;
      case "author":
        Books.deleteMany({ author: vp }, callback);
        break;
      case "content":
        Books.deleteMany({ content: vp }, callback);
        break;
      default:
        break;
    }
  } else {
    switch (vt) {
      case "title":
        console.log("title");
        Books.deleteMany({ title: vp });
        break;
      case "author":
        console.log("author");
        Books.deleteMany({ author: vp });
        break;
      case "content":
        Books.deleteMany({ content: vp });
        break;
      default:
        break;
    }
  }
};
