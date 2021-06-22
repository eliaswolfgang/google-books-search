const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  image: {
    url:  { type: String }
  },
  link: String,
  _uid: { type: Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Book', Book);
