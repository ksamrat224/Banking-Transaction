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
  res.cookie("token", token);
  res.status(201).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    token,
  });
}

/**
 * - user login controller
 *- POST /api/auth/login
 */
async function userLoginController(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({ message: "User not found", status: "fail" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Invalid credentials", status: "fail" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token);
  res.status(200).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    token,
  });
}
module.exports = {
  userRegisterController,
  userLoginController,
};
