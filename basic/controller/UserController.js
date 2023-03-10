const studentSchema = require("../model/studentschema");
const mailer = require("../Util/Mailer");
const otpGenerator = require("../Util/OtpGenerator");

exports.createUser = (req, res) => {
  const student = new studentSchema(req.body);
  student.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in saving data",
      });
    } else {
      const otp = otpGenerator.generateOtp();
      mailer.sendMail(data.email, data.name, otp);
      res.status(201).json({
        data: data,
        message: "Data saved",
      });
    }
  });
};

exports.getAllUsers = (req, res) => {
  studentSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      res.status(200).json({
        data: data,
        message: "Data fetched successfully",
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  studentSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in deleting data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "Data deleted successfully",
        });
      } else {
        res.status(404).json({
          message: "Data not found",
        });
      }
    }
  });
};

exports.updateUser = (req, res) => {
  console.log(req.body.name);
  if (
    req.body.name == undefined ||
    req.body.email == undefined ||
    req.body.password == undefined ||
    req.body.age == undefined ||
    req.body.isMarried == undefined
  ) {
    console.log("Bad request");
    res.status(400).json({
      message: "Bad request",
    });
  } else {
    var user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      isMarried: req.body.isMarried,
    };

    const id = req.params.id;
    studentSchema.findByIdAndUpdate(id, req.body, (err, data) => {
      if (data != studentSchema) {
        res.status(400).json({
          message: "Error in updating data",
        });
      } else {
        if (err) {
          res.status(500).json({
            message: "Error in updating data",
          });
        } else {
          if (data != null || data != undefined) {
            res.status(200).json({
              data: data,
              message: "Data updated successfully",
            });
          } else {
            res.status(404).json({
              message: "Data not found",
            });
          }
        }
      }
    });
  }
};

exports.getuserById = (req, res) => {
  const id = req.params.id;
  studentSchema.findById(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Data fetched successfully",
          user: data,
        });
      } else {
        res.status(404).json({
          message: "Data not found",
        });
      }
    }
  });
};
