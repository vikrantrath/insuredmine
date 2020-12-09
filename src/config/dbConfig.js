const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/insuredmine",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, results) => {
    if (err) console.log(err);
  }
);

mongoose.Promise = global.Promise;
