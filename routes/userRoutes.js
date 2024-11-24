const express = require("express");
const {
  registerContoller,
  loginController,
  updateUserContoller,
  requireSingIn,
} = require("../contollers/userContollers");

const router = express.Router();

router.post("/register", registerContoller);

// LOGIN || POST
router.post("/login", loginController);

router.put("/update-user", requireSingIn, updateUserContoller);

module.exports = router;
