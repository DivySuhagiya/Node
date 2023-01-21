const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = schema({
  ProductName: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Qty: {
    type: Number,
  },
});

module.exports = mongoose.model("Products", productSchema);
