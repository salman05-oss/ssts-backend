const User = require("../models/User");
const { VerifyMobileSms } = require("../services/notification/Sms");
const DoesNotExistError = require("../exceptions/DoesNotExistError");
const expressJwt = require("express-jwt");
const { generateTokens, RefreshToken } = require("../services/auth");
const { OTPEmail } = require("../services/notification/Email");
const { VerifyContactOTP } = require("../services/otp");

// Signup Method
module.exports.signup = async (req, res) => {
  try {
    let data = req.body;
    data = { ...data, mobileNoVerified: true };
    await User.create(data);
    return res.status(201).send({ message: "created successfully" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

// Signed Method
module.exports.signin = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;

    let user = await User.findOne({ mobileNo });
    if (!user || !user.isValidPassword(password)) {
      throw new DoesNotExistError();
    }

    let data = generateTokens({ user });
    RefreshToken.send(res, data.refreshToken);

    return res.send(data);
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
};

// Protected Routes
module.exports.isSignedIn = expressJwt({
  // in this middleware the next() is already there or written in expressJwt so we no need to specify explicitely
  secret: "TEMPU",
  algorithms: ["RSA", "sha1", "RS256", "HS256"],
  userProperty: "auth", // this middleware put this auth onto the request
});

// custom middlewares
module.exports.isAuthenticated = (req, res, next) => {
  //  isAuthenticated means user can change things in his own account
  const checker = req.profile && req.auth && req.profile._id == req.auth._id; // through a frontend we will set a property called profile, and this property is only going to set if user is login
  if (!checker) {
    res.status(403).json({
      error: "ACCESS DENIED",
    });
  }

  next();
};

// Refresh Token
module.exports.refreshToken = async (req, res) => {
  try {
    const user = await User.findById(req.userData._id);
    const data = generateTokens({ user });
    return res.send(data);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

/**
 * generate the otp, send the otp via appropriate channel (e.g. sms, email)
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.getOTPMobileNo = async (req, res) => {
  try {
    let { mobileNo } = req.body;
    let otp = await VerifyContactOTP.generate(mobileNo);
    VerifyMobileSms.send({ to: mobileNo, otp });
    return res.send({ message: `OTP has been sent to ${mobileNo}`, otp });
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
};

module.exports.getOTPEmail = async (req, res) => {
  try {
    let { email } = req.body;
    let otp = await VerifyContactOTP.generate(email);
    OTPEmail.send({ to: email, otp });
    return res.send({ otp, message: "OTP has been sent to email" });
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
};
