const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = Schema({
  playlistName: {
    type: String,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "song",
    },
  ],
});

module.exports = mongoose.model("playlist", PlaylistSchema);
