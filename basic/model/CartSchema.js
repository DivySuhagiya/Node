const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  qty: Number,
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
