const userStore = require("./user.store");
const bcryptjs = require("bcryptjs");

const addUser = async (user) => {
  const { name, cellphone, email, password } = user;
  if (!name || !cellphone || !email || !password) {
    throw new Error("Incomplete Data");
  }
  const salt = bcryptjs.genSaltSync();
  const encryptPassword = bcryptjs.hashSync(password, salt);
  const newUser = { name, cellphone, email, password: encryptPassword };
  const userSaved = await userStore.addUser(newUser);
  return userSaved;
};

const getUsers = async () => {
  const users = await userStore.listUsers();
  return users;
};

module.exports = {
  addUser,
  getUsers,
};
