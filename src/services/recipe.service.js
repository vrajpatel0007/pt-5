const Recipe = require("../models/recipe.modal")

const createRecipe = async (body) => {
    return await Recipe.create(body)
}

const getAllRecipes = async () => {
    return await Recipe.find()
}

const getRecipeById = async (id) => {
    return await Recipe.findById(id)
}

const updateRecipe = async (id, body) => {
    return await Recipe.findByIdAndUpdate(id, { $set: body }, { new: true })
}

const deleteRecipe = async (id) => {
    return await Recipe.findByIdAndDelete(id)
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}