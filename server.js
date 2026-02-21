require("dotenv").config(); // Load environment variables from .env file

const app = require("./src/app");
const connectToDB = require("./src/config/db");

connectToDB(); // Connect to the database

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
