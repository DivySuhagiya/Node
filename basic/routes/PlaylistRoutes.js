const express = require("express");
const router = express.Router();
const playlistController = require("../controller/PlaylistController");
router.post("/playlist", playlistController.createPlaylist);
router.post("/playlist/:id", playlistController.removeSongFromPlaylist);

module.exports = router;
