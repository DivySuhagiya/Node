const multer = require("multer");
const path = require("path");
const uploadSchema = require("../model/UploadSchema");

const storage = multer.diskStorage({
  destination: "../uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 9000000 },
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
      return cb(undefined, true);
    } else {
      return cb(new Error("Only jpeg and png files are supported"), false);
    }
  },
}).single("file");

exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    } else {
      if (req.file == undefined) {
        return res.status(400).json({
          message: "No file selected",
        });
      } else {
        let absPath = path.resolve("../uploads", req.file.originalname);
        const upload1 = new uploadSchema({
          name: req.file.originalname,
          path: absPath,
          size: req.file.size,
          type: req.file.mimetype,
        });
        upload1.save((err, data) => {
          if (err) {
            res.status(400).json({
              message: "Error in saving file",
            });
          } else {
            res.status(200).json({
              message: "File uploaded successfully",
            });
            file: `uploads/${req.file.originalname}`;
          }
        });
        /* console.log(req.file.mimetype);
        console.log(req.file.size / 1000);

        return res.status(200).json({
          message: "File uploaded successfully",
          file: `uploads/${req.file.originalname}`,
        }); */
      }
    }
  });
};
