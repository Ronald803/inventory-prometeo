const express = require("express");
const router = express.Router();
const saleController = require("./sale.controler");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await saleController.addSale(req.body);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await saleController.getSales();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
