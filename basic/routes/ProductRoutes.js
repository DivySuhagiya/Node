const express = require("express");
const app = express();
const router = express.Router();
const productController = require("../controller/ProductController");

router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProduct);

module.exports = router;
