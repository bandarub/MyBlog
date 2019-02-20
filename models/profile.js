const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  name: String,
  Occupation: String,
  bio:String
});

module.exports = Students = mongoose.model("Profile", ProfileSchema);
