// var recipes = ['pizza', 'burrito', 'fruit salad'];

// it should store the recipes in an object
var recipeList = {
  recipes: ["pizza", "burrito", "fruit salad"],
  showRecipes: function() {
    console.log("My recipes:", this.recipes);
  },
  addRecipe: function(recipe) {
    this.recipes.push(recipe);
    this.showRecipes();
  },
  changeRecipe: function(position, newValue) {
    this.recipes[position] = newValue;
    this.showRecipes();
  },
  deleteRecipe: function(position) {
    this.recipes.splice(position, 1);
    this.showRecipes();
  }
};

// console.log(recipeList.showRecipes());
// console.log(recipeList.addRecipe('spaghetti'));
// console.log(recipeList.changeRecipe(1, 'fruit salad'));
console.log(recipeList.deleteRecipe(2));

// it should store the recipes in an object
// write out v2 first
// function displayRecipes() {
//     console.log('My recipes:', recipes);
// }

// function addRecipe(recipe) {
//     recipes.push(recipe);
//     displayRecipes();
// }

// function changeRecipe(position, newValue) {
//     recipes[position] = newValue;
//     displayRecipes();
// }

// function deleteRecipe(position) {
//     recipes.splice(position, 1);
//     displayRecipes();
// }
