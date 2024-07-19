const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pintrestclone");
// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  dp: {
    type: String, // Assum ing you'll store the URL of the user's profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
  },
});
userSchema.plugin(plm);
// Create a model from the user schema
module.exports = mongoose.model("User", userSchema);
