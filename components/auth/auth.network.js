const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await authController.login(req.body);
    responseFunc.success(res, "Logged successfully", response, 200);
  } catch (error) {
    responseFunc.error(res, error.message, 400);
  }
});

module.exports = router;
