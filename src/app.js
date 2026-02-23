const express = require("express");
const cookieParser = require("cookie-parser"); // Import cookie-parser middleware
const authRouter = require("./routes/auth.routes"); // Import the authentication routes

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies in requests

app.use("/api/auth", authRouter); // Use the authentication routes for any requests to /api/auth

module.exports = app; // Export the app instance for use in other files
