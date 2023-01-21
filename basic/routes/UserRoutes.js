const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controller/UserController");

router.post("/student", userController.createUser);
router.get("/student", userController.getAllUsers);
router.post("/student/:id", userController.updateUser);

module.exports = router;
