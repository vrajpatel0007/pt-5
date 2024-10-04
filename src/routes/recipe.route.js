const express = require("express");
const router = express.Router();
const recipe_controller = require("../controllers/recipe.controller");
const { authUser } = require("../middleware/auth");

router.post("/create", authUser, recipe_controller.createrecipe)
router.get("/recipe_list", authUser, recipe_controller.getallrecipes)
router.get("/recipeId", authUser, recipe_controller.getrecipebyid)
router.put("/update_recipe", authUser, recipe_controller.updaterecipe)
router.delete("/recipe_delete", authUser, recipe_controller.deleterecipe)



module.exports = router;