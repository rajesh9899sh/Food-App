const mongoose = require("mongoose");

const foodSchema = {
  CategoryName: String,
};

const FoodCategoryData = mongoose.model("food_category", foodSchema);
module.exports = FoodCategoryData;
