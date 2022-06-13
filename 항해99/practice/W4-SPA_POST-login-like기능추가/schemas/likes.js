const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  postsId: {
    type: Number,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Likes', likesSchema);
