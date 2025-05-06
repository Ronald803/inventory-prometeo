const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const { validateJWT } = require("../../middlewares/validateJWT");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await productController.addProduct(req.body);
    responseFunc.success(res, response.length, response, 200);
  } catch (error) {
    responseFunc.error(res, error.message, 400);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await productController.getProducts();
    responseFunc.success(res, response.length, response, 200);
  } catch (error) {
    responseFunc.error(res, error.message, 400);
  }
});

module.exports = router;
