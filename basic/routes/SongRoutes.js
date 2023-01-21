const express = require("express");
const router = express.Router();
const songController = require("../controller/SongController");
router.post("/song", songController.createSong);


module.exports = router;
