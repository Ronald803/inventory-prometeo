const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const userStore = require("../user/user.store");

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Incomplete Data");
  }
  const users = await userStore.listUsers({ email });
  if (users.length < 1) {
    throw new Error("Wrong information");
  }
  const validPassword = bcryptjs.compareSync(password, users[0].password);
  if (!validPassword) {
    throw new Error("Wrong information");
  }
  const payload = { uid: users[0]._id };
  const token = jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
    expiresIn: "4h",
  });
  return { name: users[0].name, token };
};

module.exports = { login };
