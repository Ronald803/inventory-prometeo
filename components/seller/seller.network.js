const express = require("express");
const router = express.Router();
const sellerController = require("./seller.controller");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await sellerController.addSeller(req.body);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await sellerController.getSellers();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
