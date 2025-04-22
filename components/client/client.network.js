const express = require("express");
const router = express.Router();
const clientController = require("./client.controller");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", validateJWT(), async (req, res) => {
  try {
    const response = await clientController.addClient(req.body);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await clientController.getClients();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
