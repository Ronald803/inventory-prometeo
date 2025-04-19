const UserModel = require("./user.model");

const addUser = async (user) => {
  const newUser = new UserModel(user);
  const userSaved = await newUser.save();
  return userSaved;
};

const listUsers = async (filter) => {
  const users = await UserModel.find(filter);
  return users;
};

module.exports = { addUser, listUsers };
