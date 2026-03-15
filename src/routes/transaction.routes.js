const { Router } = require("express");
const { authMiddleware } = require("../middleware/auth.middleware");

const transactionRoutes = Router();

/**
 * POST /api/transactions - Create a new transaction for the authenticated user
 * Creates a new transaction with the provided details, associating it with the authenticated user.
 * Requires authentication via the authMiddleware to ensure that only logged-in users can create transactions.
 * Expects a JSON request body with the following fields:
 */
transactionRoutes.post(
  "/",
  authMiddleware.authMiddleware,
  trasactionController.createTransaction,
);

transactionRoutes.post(
  "/system/initial-funds",
  authMiddleware.authSystemuserMiddleware,
  transactionController.createInitialFundsTransaction,
);
module.exports = transactionRoutes;
