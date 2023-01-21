const cartSchema = require("../model/CartSchema");

exports.createCart = (req, res) => {
  const cart = new cartSchema(req.body);
  cart.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding product",
      });
    } else {
      res.status(201).json({
        message: "Product added successfully",
        data: data,
      });
    }
  });
};
exports.getAllCart = (req, res) => {
  cartSchema
    .find()
    .populate("user")
    .populate("products")
    .exec((err, success) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting cart",
        });
      } else {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: success,
        });
      }
    });
};
/* exports.getCartById = (req, res) => {
  cartSchema
    .findById(req.params.id)
    .populate("user")
    .populate("products")
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting cart",
        });
      } else {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: data,
        });
      }
    });
}; */

exports.getCartById = (req, res) => {
  var userId = req.query.user;
  var query = { user: userId };
  console.log(userId);
  console.log(query);
  cartSchema
    .find(query)
    .populate("user")
    .populate("products")
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting cart",
        });
      } else {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: data,
        });
      }
    });
};
