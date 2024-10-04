const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const recipeRoute = require("./recipe.route");

routes.use("/user", userRoute);
routes.use("/recipe", recipeRoute);

module.exports = routes;
