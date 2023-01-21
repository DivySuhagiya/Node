const fs = require("fs");

function findNameStartWithS() {
  var datastr = fs.readFileSync("./filehandling/MOCK_DATA.json", "utf-8");
  var data = JSON.parse(datastr);

  for (var i = 0; i < data.length; i++) {
    var first_name = data[i].first_name;
    if (first_name.startsWith("s")) {
      console.log(fn_str);
    }
  }
}

function printEmail() {
  var datastr = fs.readFileSync("./filehandling/MOCK_DATA.json", "utf-8");
  var data = JSON.parse(datastr);
  if (fs.existsSync("./filehandling/email.txt")) {
    console.log("File already exists");
  } else {
    for (var i = 0; i < data.length; i++) {
      var email = data[i].email;
      var emailstr = JSON.stringify(email);
      fs.appendFileSync("./filehandling/email.txt", emailstr);
    }
  }
}

function palindrome() {
  var datastr = fs.readFileSync("./filehandling/MOCK_DATA.json", "utf-8");
  var data = JSON.parse(datastr);

  for (var i = 0; i < data.length; i++) {
    var first_name = data[i].first_name;
    let ans = checkPalindrome(first_name);
    if (ans == true) {
      console.log("Palindrome: " + first_name);
    } else {
      console.log("Not Palindrome: " + first_name);
    }
  }
}
let checkPalindrome = (string) => {
  return string === string.split("").reverse().join("");
};


module.exports = { findNameStartWithS, printEmail, palindrome };
