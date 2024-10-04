const recipe_service = require("../services/recipe.service")


const createrecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, cuisine } = req.body;
        if (!title || !ingredients || !instructions || !cuisine) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const body = {
            title,
            ingredients,
            instructions,
            cuisine,
            author: req.user._id
        };
        const recipe = await recipe_service.createRecipe(body);
        res.status(200).json({ message: "create recipe successfully", data: body });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

const getallrecipes = async (req, res) => {
    try {
        const recipes = await recipe_service.getAllRecipes();
        res.status(200).json({ message: "get all recipes successfully", data: recipes });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

const getrecipebyid = async (req, res) => {
    try {
        const recipeid = req.body._id;
        const recipe = await recipe_service.getRecipeById(recipeid);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: "get recipe by id successfully", data: recipe });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

const updaterecipe = async (req, res) => {
    try {
        const recipeid = req.body._id;
        console.log("🚀 ~ updaterecipe ~ recipeid:", recipeid)
        const body = {};
        if (req.body) {
            body.title = req.body.title;
            body.ingredients = req.body.ingredients;
            body.instructions = req.body.instructions;
            body.cuisine = req.body.cuisine;
        }
        const updatedRecipe = await recipe_service.updateRecipe(recipeid, body);

        res.status(200).json({ message: "update recipe successfully", data: updatedRecipe });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

const deleterecipe = async (req, res) => {
    try {
        const recipeid = req.body._id;
        const recipe = await recipe_service.getRecipeById(recipeid);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        const deletedRecipe = await recipe_service.deleteRecipe(recipeid);
        res.status(200).json({ message: "delete recipe successfully" });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    createrecipe,
    getallrecipes,
    getrecipebyid,
    updaterecipe,
    deleterecipe
}