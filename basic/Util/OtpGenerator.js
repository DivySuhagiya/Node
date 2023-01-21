const otpGenerator = require("otp-generator");
const otpType = require("../Util/Otpconfig.js");
function generateOtp() {
  const otp = otpGenerator.generate(otpType.OTP_LENGTH, otpType.OTP_CONFIG);
  return otp;
}
module.exports = { generateOtp };
/* function generateOtp () {
    var string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let OTP = "";
    var len = string.length;
    for (let i = 0; i < 6; i++) {
      OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
  };
  console.log(generateOtp());
 */
