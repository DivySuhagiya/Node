const fs = require("fs");

function writeDataTofile() {
  let data = "Hello this is node file... \n";
  fs.writeFileSync("./filehandling/input.txt", data);
}

function appendDataTofile() {
  let data = "new data appended";
  fs.appendFileSync("./filehandling/input.txt", data);
}

function readJsonFromFile() {
  var employeestr = fs.readFileSync("./filehandling/employees.json", "utf-8");
  var employees = JSON.parse(employeestr);
  console.log(employees);
  console.log(employees[0].name);
}

function writeJsonData() {
  var students = [
    {
      id: "1",
      name: "Divy",
      age: "20",
    },

    {
      id: "2",
      name: "Mary",
      age: "21",
    },

    {
      id: "3",
      name: "Poojan",
      age: "22",
    },
  ];
  var studentstr = JSON.stringify(students);
  fs.writeFileSync("./filehandling/students.json", studentstr);
}

module.exports = {
  writeDataTofile,
  appendDataTofile,
  readJsonFromFile,
  writeJsonData,
};
