const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  refreshToken,
  getOTPEmail,
  getOTPMobileNo,
} = require("../controllers/auth");
const {
  getOTPEmailValidationRules,
  getOTPMobileNoValidationRules,
  refreshTokenValidationRules,
} = require("../validations/auth");
const {
  signUpValidationRules,
  signInValidationRules,
} = require("../validations/user");
const validate = require("../validations/validate");

router.post("/sign-up", signUpValidationRules(), validate, signup);
router.post("/sign-in", signInValidationRules(), validate, signin);
router.post(
  "/refresh-token",
  refreshTokenValidationRules(),
  validate,
  refreshToken
);
router.post(
  "/get-otp/email",
  getOTPEmailValidationRules(),
  validate,
  getOTPEmail
);
router.post(
  "/get-otp/mobile-no",
  getOTPMobileNoValidationRules(),
  validate,
  getOTPMobileNo
);

// Testing Route
router.get("/testroute", (req, res) => {
  res.send("hello");
});

module.exports = router;
