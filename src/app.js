const express = require("express");
const authRouter = require("./routes/auth.routes"); // Import the authentication routes

const app = express(); // Create an instance of the Express application

app.use("/api/auth", authRouter); // Use the authentication routes for any requests to /api/auth

module.exports = app; // Export the app instance for use in other files
