var colors = require("colors");
var obj = require("./calc");
const http = require("http");

var server = http.createServer();
var PORT = 3000;
server.listen(PORT, () => {
  console.log("server is running on port ".magenta, PORT);
});
var name = obj.name;
console.log(obj.add(100, 200));
console.log(name.bgWhite);

const files = require("./filehandling/FileDemo");
files.writeDataTofile();
files.appendDataTofile();
files.readJsonFromFile();
files.writeJsonData();

const json = require("./filehandling/Jsonpractice");
json.findNameStartWithS();
json.printEmail();
json.palindrome();

/*app.get("/user", (req, res) => {
  //res.send("Hello user");
  //res.status(200).send("Hello User");
  res.json({
    name: "abc",
    age: 20,
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  //res.send("user created");
  res.status(201).json({
    message: "data added",
    object: req.body,
  });
});

app.delete("/user/:id", (req, res) => {
  try {
    let id = req.params.id;
    if (id == 0) {
      throw new Error("id is not valid");
    } else {
      res.json({
        message: "data deleted",
        id: id,
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.put("/user/:name", (req, res) => {
  let name = req.params.name;
  if (name === "divy") {
    res.json({
      message: "data updated",
      object: req.body,
    });
  } else {
    res.status(400).send("name is not valid");
  }
});

app.get("/user/:id", (req, res) => {
  res.send("Hello" + req.params.id);
});*/

/* app.get("/user/:name", (req, res) => {
  try {
    let name = req.params.name;
    var datastr = fs.readFileSync("./express/user_data.json", "utf-8");
    var data = JSON.parse(datastr);

    for (var i = 0; i < data.length; i++) {
      var first_name = data[i].first_name;
      if (first_name == name) {
        return res.status(202).json({
          message: "data found",
          object: data[i],
        });
      }
    }
    if (first_name != name) {
      throw new Error("Data not found");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.get("/user", (req, res) => {
  var allFemale = gender.gender();
  res.status(202).json({
    message: "All female data",
    object: allFemale,
  });
}); */
