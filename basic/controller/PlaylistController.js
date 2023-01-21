const playlistSchema = require("../model/playlistSchema");

exports.createPlaylist = (req, res) => {
  const playlist = new playlistSchema(req.body);
  playlist.save((err, data) => {
    if (err) {
      res.status(500).json({
        message:
          err.message || "Some error occured while creating the playlist",
      });
    } else {
      res.status(201).json({
        message: "playlist created successfully",
        data: data,
      });
    }
  });
};

exports.removeSongFromPlaylist = (req, res) => {
  playlistSchema.findOneAndUpdate(
    { id: req.params.id },
    { $pull: { songs: req.body.songs } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            err.message || "Some error occured while removing the song",
        });
      } else {
        res.status(201).json({
          message: "song removed successfully",
          data: data,
        });
      }
    }
  );
};
