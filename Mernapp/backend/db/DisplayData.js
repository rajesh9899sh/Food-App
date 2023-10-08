const mongoose = require("mongoose");
const displaySchema = {
  CategoryName: String,
  name: String,
  img: String,
  description: String,
  options: [{}],
};

const DisplayData = mongoose.model("food_item", displaySchema);
module.exports = DisplayData;
