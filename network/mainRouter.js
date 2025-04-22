const userNetwork = require("../components/user/user.network");
const authNetwork = require("../components/auth/auth.network");
const productNetwork = require("../components/product/product.network");
const storeNetwork = require("../components/store/store.network");
const sellerNetwork = require("../components/seller/seller.network");

const routes = (server) => {
  server.use("/api/user", userNetwork);
  server.use("/api/auth", authNetwork);
  server.use("/api/product", productNetwork);
  server.use("/api/store", storeNetwork);
  server.use("/api/seller", sellerNetwork);
  server.get("/prometeo", (req, res) => {
    res.send("Get request Prometeo");
  });
};

module.exports = routes;
