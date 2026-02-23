const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/**
 * - user register controller
 *- POST /api/auth/register
 */
async function userRegisterController(req, res) {
  const { name, email, password } = req.body;
  const isExisting = await userModel.findOne({ email: email });
  if (isExisting) {
    return res
      .status(422)
      .json({ message: "User already exists", status: "fail" });
  }
  const user = await userModel.create({ name, email, password });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

module.exports = {
  userRegisterController,
};
