const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
  title: String,
  category: String,
  detail: String
});

module.exports = Students = mongoose.model("Posts", PostSchema);
