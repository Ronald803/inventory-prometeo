const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../components/user/user.model");
const responseFunc = require("../helpers/responseFunc");

const validateJWT = () => {
  return async (req = request, res = response, next) => {
    const token = req.header("xtoken");
    if (!token) {
      return responseFunc.error(res, "Error", 400);
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
      responseFunc.error(res, "bad-token", 400);
    }
  };
};

module.exports = {
  validateJWT,
};
