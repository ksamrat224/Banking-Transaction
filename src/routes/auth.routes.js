const express = require("express");
const authContoller = require("../controllers/auth.controller");

const router = express.Router();

// POST /api/auth/register - Register a new user
router.post("/register", authContoller.userRegisterController);
// POST /api/auth/login - Log in an existing user
router.post("/login",authContoller.userLoginController)



module.exports = router;
