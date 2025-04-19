const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await productController.addProduct(req.body);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await productController.getProducts();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
