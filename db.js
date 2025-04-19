const db = require("mongoose");

db.Promise = global.Promise;

const connectDB = async (url) => {
  await db
    .connect(url)
    .then(() => console.log("[db] Successfully connected"))
    .catch((e) => console.log("[db] ", e));
};

module.exports = connectDB;
