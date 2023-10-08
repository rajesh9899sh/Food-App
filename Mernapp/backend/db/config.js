const mongoose = require("mongoose");
const DB = process.env.key;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(err));
