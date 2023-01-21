const songSchema = require("../model/SongSchema");

exports.createSong = (req, res) => {
  const song = new songSchema(req.body);
  song.save((err, data) => {
    if (err) {
      res.status(500).json({
        message:
          err.message || "Some error occured while adding the song",
      });
    } else {
      res.status(201).json({
        message: "song added successfully",
        data: data,
      });
    }
  });
};
