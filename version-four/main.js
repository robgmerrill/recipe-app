// boolean is a version of true or false
// change array of text to array of objects

// goals
// recipeList.addRecipe should add objects
// recipeList.changeRecipe should change the recipeText property
// recipeList.toggleCompleted shoudl change the completed property - this will use booleans - if finished, true - if not, false - toggle completed will switch between true and false

// previously 'recipe' now and object allows us to have more properties to customize
// review last versions code.

var recipeList = {
  //     replace strings with objects
  recipes: [],
  showRecipes: function() {
    console.log("My recipes:", this.recipes);
  },
  addRecipe: function(recipeText) {
    // addRecipe('chili')
    // we are now pushing on an object.
    this.recipes.push({
      //           argument passed in
      recipeText: recipeText, // 'chili'
      //           by default set to false
      completed: false
    });
    this.showRecipes();
  },
  changeRecipe: function(position, recipeText) {
    //       this.recipes[position] = newValue;
    this.recipes[position].recipeText = recipeText;
    this.showRecipes();
  },
  deleteRecipe: function(position) {
    this.recipes.splice(position, 1);
    this.showRecipes();
  },
  // new stuff
  toggleCompleted: function(position) {
    //         get a references to a recipe in the recipes array
    var recipe = this.recipes[position];
    //         set that recipes completed boolean value to the opposite value
    recipe.completed = !recipe.completed;
    //         longhand of above would be this.recipes[position].completed = !this.recipes[position].completed
    this.showRecipes();
  }
};

// {
//     recipeText: 'pizza',
//     completed: false, // boolean values represented by true or false. it is complete or not
// }

// recipeList.addRecipe('This is the recipe list object recipe text');
// should see at 0 index of recipe array { completed: false, recipeText: "This is the recipe..."}

// recipeList.showRecipes();
// recipeList.recipes;

// console.log(recipeList.addRecipe('first try'));
// console.log(recipeList.changeRecipe(0, 'second try'))

recipeList.addRecipe("recipe testing");
recipeList.toggleCompleted(0);
recipeList.toggleCompleted(0);
