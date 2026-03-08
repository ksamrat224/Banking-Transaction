const express = require("express");
const middleware = require("../middleware/auth.middleware");
const accountController = require("../controllers/account.controller");

const router = express.Router();

/**
 * POST /api/accounts - Create a new account for the authenticated user
 * Creates a new account with the provided account type and initial balance, associating it with the authenticated user.
 * Requires authentication via the authMiddleware to ensure that only logged-in users can create accounts.
 * Expects a JSON request body with the following fields:
 */
router.post(
  "/",
  middleware.authMiddleware,
  accountController.createAccountController,
);

module.exports = router;
