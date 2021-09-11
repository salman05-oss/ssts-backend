const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv4 = require("uuid/v1");
const {
 
  DATA_PRIVILEDGES_TYPE
} = require("../contants/constant");
/**
 * password will be auto generated by the system.
 * and sent using appropriate channel (e.g email, sms, in response)
 */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    roles: [{}],
    contact: {
      type: String,
      required: true},
     dataPriviledges: {
      type: {
        type: String,
        enum: DATA_PRIVILEDGES_TYPE,
        required: true,
      },
      businessId: String,
    },
  },
  { timestamps: true }
);

// Code for Encrypting the Password, Generating the salt and for Password comparison
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password; // private variables _password to store it
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  autheticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);