const accountModel = require("../models/account.model");

async function createAccountController(req, res) {
  const user = req.user; // Get the authenticated user from the request object
  const account = await accountModel.create({
    user: user._id, // Associate the account with the authenticated user's ID
  });
  res.status(201).json({
    account,
  });
}

module.exports = {
  createAccountController,
};
