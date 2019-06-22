// displayRecipes should show recipeText
// displayRecipes should tell yo if recipes is empty
// displayRecipes should show completed

var recipeList = {
  recipes: [],
  showRecipes: function() {
    if (this.recipes.length === 0) {
      console.log("Your recipes are empty");
    } else {
      console.log("My recipes:");
      //         console.log('My recipes:', this.recipes);

      for (var i = 0; i < this.recipes.length; i++) {
        // this.recipes.length has 3 items
        // i = 0
        // i = 1
        // i = 2

        //                 if .completed is true print (x)
        if (this.recipes[i].completed === true) {
          console.log("(X)", this.recipes[i].recipeText);
        } else {
          //                  if .completed is not true print ( )
          console.log("( )", this.recipes[i].recipeText);
        }
      }
    }
  },
  addRecipe: function(recipeText) {
    // addRecipe('chili')
    this.recipes.push({
      recipeText: recipeText, // 'chili'
      completed: false
    });
    this.showRecipes();
  },
  changeRecipe: function(position, recipeText) {
    this.recipes[position].recipeText = recipeText;
    this.showRecipes();
  },
  deleteRecipe: function(position) {
    this.recipes.splice(position, 1);
    this.showRecipes();
  },
  toggleCompleted: function(position) {
    var recipe = this.recipes[position];
    recipe.completed = !recipe.completed;
    this.showRecipes();
  }
};

recipeList.addRecipe("first try");
recipeList.addRecipe("second try");
