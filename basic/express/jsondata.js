const express = require("express");
const app = express();
const fs = require("fs");

function namematch() {
  app.get("/user/:name", (req, res) => {
    try {
      let name = req.params.name;
      var datastr = fs.readFileSync("./express/user_data.json", "utf-8");
      var data = JSON.parse(datastr);

      for (var i = 0; i < data.length; i++) {
        var first_name = data[i].first_name;
        if (first_name == name) {
          res.json({
            message: "data found",
            object: data[i],
          });
        }
      }
      if (first_name != name) {
        throw new Error("Data not found");
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
}
function gender() {
  var datastr = fs.readFileSync("./express/user_data.json", "utf-8");
  var data = JSON.parse(datastr);
  var allfemale = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].gender === "Female") {
      allfemale.push(data[i]);
    }
  }
  return allfemale;
}

module.exports = { namematch, gender };
