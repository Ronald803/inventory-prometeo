const express = require("express");
const router = express.Router();
const userController = require("./user.controller");
const { validateJWT } = require("../../middlewares/validateJWT");

router.post("/", async (req, res) => {
  try {
    const response = await userController.addUser(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
router.get("/", validateJWT(), async (req, res) => {
  try {
    const response = await userController.getUsers();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.put("/", validateJWT, (req, res) => {
  res.send("Put users");
});

router.delete("/", (req, res) => {
  res.send("Delete users");
});

module.exports = router;
