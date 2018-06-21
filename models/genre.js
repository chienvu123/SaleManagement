const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
}