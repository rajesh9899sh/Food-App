const mongoose = require("mongoose");
const userSchema = {
  name: String,
  location: String,
  email: String,
  password: String,
};

const User = mongoose.model("users", userSchema);
module.exports = User;
