const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("error connecting to db", err);
      process.exit(1); // Exit the process with an error code
    });
}

module.exports = connectToDB; // Export the connectToDB function for use in other files
