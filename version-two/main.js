var recipes = ["pizza", "beer"];

// it should have a function to display recipes
function displayRecipes() {
  console.log("My recipes: ", recipes);
}

// it should have a function to add todos
function addRecipe(recipe) {
  recipes.push(recipe);
  displayRecipes();
}

// it should have a function to change recipes
function changeRecipe(position, newValue) {
  recipes[position] = newValue;
  displayRecipes();
}

// it should have a function to delete recipes
function deleteRecipe(position) {
  recipes.splice(position, 1);
  displayRecipes();
}

// displayRecipes();
// addRecipe('burrito');
// changeRecipe(2, 'fruit salad');
deleteRecipe(2);
