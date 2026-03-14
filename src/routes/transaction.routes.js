const { Router } = require("express");

const transactionRoutes = Router();

/**
 * POST /api/transactions - Create a new transaction for the authenticated user
 * Creates a new transaction with the provided details, associating it with the authenticated user.
 * Requires authentication via the authMiddleware to ensure that only logged-in users can create transactions.
 * Expects a JSON request body with the following fields:
 */ 
transactionRoutes.post('/')
module.exports = transactionRoutes;
