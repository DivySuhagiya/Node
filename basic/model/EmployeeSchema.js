const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  /* department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  }, */

  department: [
    {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
  ],
});
module.exports = mongoose.model("Employee", employeeSchema);
