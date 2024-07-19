const mongoose = require("mongoose");

// Define the post schema
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image:{
    type:String,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: 0,
  },
});

// Create a model from the post schema
module.exports = mongoose.model("Post", postSchema);
