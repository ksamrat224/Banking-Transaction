const express = require("express");
const cookieParser = require("cookie-parser"); // Import cookie-parser middleware

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies in requests

/**
 * Routes required for handling API requests
 * Each route is imported from the routes directory and used with a specific base path
 */
const authRouter = require("./routes/auth.routes"); // Import the authentication routes
const accountRouter = require("./routes/account.routes"); // Import the account routes
const transactionRouter = require("./routes/transaction.routes"); // Import the transaction routes
/**
 * Use the imported routes for handling API requests
 */
app.use("/api/auth", authRouter); // Use the authentication routes for any requests to /api/auth
app.use("/api/accounts", accountRouter); // Use the account routes for any requests to /api/accounts
app.use("/api/transactions", transactionRouter); // Use the transaction routes for any requests to /api/transactions

module.exports = app; // Export the app instance for use in other files
