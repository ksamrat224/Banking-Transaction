const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized: User not found",
      });
    }
    req.user = user; // Attach the user object to the request for use in subsequent middleware or route handlers
    next(); // Call the next middleware or route handler
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
    });
  }
}

module.exports = { authMiddleware }; // Export the authMiddleware function for use in other files
