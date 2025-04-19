const express = require("express");
const router = express.Router();
const storeController = require("./store.controller");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await storeController.addStore(req.body);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await storeController.getStores();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
