const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../components/user/user.model");

const validateJWT = () => {
  return async (req = request, res = response, next) => {
    const token = req.header("xtoken");
    if (!token) {
      return res.send("Error");
    }
    try {
      const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
      const user = await userModel.findById(uid);
      if (!user) {
        return res.send("Error");
      }
      req.user = user;
      next();
    } catch (error) {
      res.send(error);
    }
  };
};

module.exports = {
  validateJWT,
};
