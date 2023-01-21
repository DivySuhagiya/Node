const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SongSchema = schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  genre: {
    type: String,
  },
});

module.exports = mongoose.model("song", SongSchema);
