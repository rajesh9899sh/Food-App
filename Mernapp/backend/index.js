const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./db/user");
const FoodCategoryData = require("./db/foodCategory");
const DisplayData = require("./db/DisplayData");
const OrderData = require("./db/OrderData");
const port = 5000;
app.use(express.json());
require("dotenv").config();
require("./db/config");
const JWT = require("jsonwebtoken");
const jwtKey = "go-food";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/test", async (req, res) => {
  const myData = await DisplayData.find({});
  res.status(200).json({ myData });
});

app.get("/testCategory", async (req, res) => {
  const myCategory = await FoodCategoryData.find({});
  res.status(200).json({ myCategory });
});

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  JWT.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({ result: "Something went wrong, please try again later." });
    }
    res.send({ result, auth: token });
  });
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      JWT.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({ result: "Something went wrong, please try again later." });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
