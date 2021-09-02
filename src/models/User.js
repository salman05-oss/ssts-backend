const mongoose = require("mongoose");

/**
 * password will be auto generated by the system.
 * and sent using appropriate channel (e.g email, sms, in response)
 */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    roles:  [{}]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
