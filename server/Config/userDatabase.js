const mongoose = require("mongoose");
// KiO931EJQJvtFAkt
module.exports.mongoconnect = mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Db connection successful");
    } else {
      console.log("Db failed to connect");
    }
  }
);
