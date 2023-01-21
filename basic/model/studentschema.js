const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentSchema = schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  isMarried: {
    type: Boolean,
  },
  otp: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("student", studentSchema);
