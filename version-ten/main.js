// start with a demo of the app.
// 1. there should be a way to create delete buttons
// 2. there should be a delete button for each toggleCompletedPositionInputeach li should have and id that has the todo position
// delete buttons shoudl have access to the recipe id
// 3. each li shold have an id that has the recipe poisition
// 4. delete buttons shoud have access to the recipe id
// 5. clicking delete should update recipeList.recipes and the DOM

var recipeList = {
  recipes: [],
  addRecipe: function(recipeText) {
    this.recipes.push({
      recipeText: recipeText,
      completed: false
    });
    // this.showRecipes();
  },
  changeRecipe: function(position, recipeText) {
    this.recipes[position].recipeText = recipeText;
    // this.showRecipes();
  },
  deleteRecipe: function(position) {
    this.recipes.splice(position, 1);
    // this.showRecipes();
  },
  toggleCompleted: function(position) {
    var recipe = this.recipes[position];
    recipe.completed = !recipe.completed;
    // this.showRecipes();
  },
  toggleAll: function() {
    var totalRecipes = this.recipes.length;
    var completedRecipes = 0;

    for (var i = 0; i < totalRecipes; i++) {
      if (this.recipes[i].completed === true) {
        completedRecipes++;
      }
    }
    if (completedRecipes === totalRecipes) {
      for (var i = 0; i < totalRecipes; i++) {
        this.recipes[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalRecipes; i++) {
        this.recipes[i].completed = true;
      }
    }
    // this.showRecipes();
  }
};

// 1. We want to get access to the display recipes button.
// var displayRecipesButton = document.getElementsByTagName('button')[0];
// var displayRecipesButton = document.querySelector('button'); // gets first button tag
// var displayRecipesButton = document.querySelector('#displayRecipesButton');
// var displayRecipesButton = document.getElementById("displayRecipesButton"); // gets id with element of button
// console.log(displayRecipesButton);
// // 2. We want to run displayRecipes method, when someone clicks the display recipes button
// displayRecipesButton.addEventListener("click", function() {
//   recipeList.showRecipes();
// });

// var toggleAllButton = document.querySelector("#toggleAllButton");
// toggleAllButton.addEventListener("click", function() {
//   recipeList.toggleAll();
// });
//  REFACTOR*****************
var handlers = {
  //   showRecipes: function() {
  //     recipeList.showRecipes();
  //   },
  toggleAll: function() {
    recipeList.toggleAll();
    view.showRecipes();
  },
  addRecipe: function() {
    var addRecipeTextInput = document.querySelector("#addRecipeTextInput");
    recipeList.addRecipe(addRecipeTextInput.value);
    addRecipeTextInput.value = "";
    view.showRecipes();
  },
  changeRecipe: function() {
    var changeRecipePositionInput = document.querySelector(
      "#changeRecipePositionInput"
    );
    var changeRecipeTextInput = document.querySelector(
      "#changeRecipeTextInput"
    );
    recipeList.changeRecipe(
      changeRecipePositionInput.valueAsNumber,
      changeRecipeTextInput.value
    );
    changeRecipePositionInput.value = "";
    changeRecipeTextInput.value = "";
    view.showRecipes();
  },
  // deleteRecipe: function() {
  deleteRecipe: function(position) {
    // var deleteRecipePositionInput = document.querySelector(
    // "#deleteRecipePositionInput"
    // );
    // recipeList.deleteRecipe(deleteRecipePositionInput.valueAsNumber);
    recipeList.deleteRecipe(position);
    // deleteRecipePositionInput.value = "";
    view.showRecipes();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.querySelector(
      "#toggleCompletedPositionInput"
    );
    recipeList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.showRecipes();
  }
};

// what the user will see. it will take recipes and display to the screen
var view = {
  showRecipes: function() {
    var recipesUl = document.querySelector("ul");
    recipesUl.innerHTML = "";
    for (var i = 0; i < recipeList.recipes.length; i++) {
      var recipeLi = document.createElement("li");
      var recipe = recipeList.recipes[i];
      //   step 2
      //    step 3
      // '(x) recipeText'
      // var recipeTextWithCompletion = '';
      // if (recipe.completed === true)
      //  (x) recipeText
      //  else
      // ( ) recipeText
      // recipeLi.textContent = recipeTextWithCompletion;

      var recipeTextWithCompletion = "";

      if (recipe.completed === true) {
        recipeTextWithCompletion = "(x) " + recipe.recipeText;
      } else {
        recipeTextWithCompletion = "( ) " + recipe.recipeText;
      }

      recipeLi.id = i;

      recipeLi.textContent = recipeTextWithCompletion;

      // append delete button to recipeLi
      recipeLi.appendChild(this.createDeleteButton());

      recipesUl.append(recipeLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var recipesUl = document.querySelector("ul");

    recipesUl.addEventListener("click", function() {
      // console.log(event.target.parentNode.id);

      // get the element that was clicked
      var elementClicked = event.target;
      // check if element clicked is a delete button
      if (elementClicked.className === "deleteButton") {
        // run handlers.deleteRecipe
        handlers.deleteRecipe(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
